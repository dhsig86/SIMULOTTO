let questionBank = [];

fetch('data/questions.json')
  .then(res => res.json())
  .then(data => {
    questionBank = data;
  });

const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultsScreen = document.getElementById('results-screen');

const startBtn = document.getElementById('start-btn');
const nextBtn = document.getElementById('next-btn');
const restartBtn = document.getElementById('restart-btn');
const printBtn = document.getElementById('print-btn');

const progressBar = document.getElementById('progress-bar');
const questionCounterEl = document.getElementById('question-counter');
const scoreCounterEl = document.getElementById('score-counter');
const questionTextEl = document.getElementById('question-text');
const questionBancaEl = document.getElementById('question-banca');
const optionsContainer = document.getElementById('options-container');
const feedbackContainer = document.getElementById('feedback-container');
const feedbackTextEl = document.getElementById('feedback-text');
const finalScoreEl = document.getElementById('final-score');
const scoreMessageEl = document.getElementById('score-message');

const numQuestionsInput = document.getElementById('num-questions');
const numQuestionsValue = document.getElementById('num-questions-value');
const areaCheckboxes = document.querySelectorAll('input[name="areas"]');
const timerEl = document.getElementById('timer');

if (numQuestionsInput && numQuestionsValue) {
    numQuestionsValue.textContent = numQuestionsInput.value;
    numQuestionsInput.addEventListener('input', () => {
        numQuestionsValue.textContent = numQuestionsInput.value;
    });
}

let timerInterval;
let timeLeft = 0;


let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    const num = parseInt(numQuestionsInput.value, 10) || questionBank.length;
    const selectedAreas = Array.from(areaCheckboxes)
        .filter(cb => cb.checked)
        .map(cb => cb.value);

    const bank = selectedAreas.length
        ? questionBank.filter(q => selectedAreas.includes(q.area))
        : [...questionBank];

    currentQuestions = bank.sort(() => 0.5 - Math.random()).slice(0, num);
    currentQuestionIndex = 0;
    score = 0;

    timeLeft = currentQuestions.length * 120;
    updateTimer();
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        timeLeft--;
        updateTimer();
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            showResults();
        }
    }, 1000);

    startScreen.classList.add('hidden');
    resultsScreen.classList.add('hidden');
    quizScreen.classList.remove('hidden');
    quizScreen.style.opacity = 1;
    showQuestion();
}

function showQuestion() {
    resetState();
    updateProgressBar();
    const question = currentQuestions[currentQuestionIndex];
    questionCounterEl.innerText = `Questão ${currentQuestionIndex + 1} de ${currentQuestions.length}`;
    scoreCounterEl.innerText = `Pontos: ${score}`;
    questionTextEl.innerText = question.question;
    questionBancaEl.innerText = `Banca: ${question.banca}`;

    question.options.forEach(option => {
        const button = document.createElement('button');
        button.innerText = option;
        button.classList.add('option-btn', 'w-full', 'text-left', 'p-4', 'border-2', 'rounded-lg', 'bg-gray-50', 'hover:bg-gray-100', 'border-gray-200');
        button.addEventListener('click', selectAnswer);
        optionsContainer.appendChild(button);
    });
}

function updateProgressBar() {
    const progressPercentage = ((currentQuestionIndex) / currentQuestions.length) * 100;
    progressBar.style.width = `${progressPercentage}%`;
}

function updateTimer() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timerEl.innerText = `${minutes}:${seconds.toString().padStart(2, '0')}`;
}

function resetState() {
    nextBtn.classList.add('hidden');
    feedbackContainer.classList.add('hidden');
    while (optionsContainer.firstChild) {
        optionsContainer.removeChild(optionsContainer.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const correct = selectedBtn.innerText === currentQuestions[currentQuestionIndex].answer;

    if (correct) {
        score++;
        scoreCounterEl.innerText = `Pontos: ${score}`;
    }

    setStatusClass(selectedBtn, correct);
    Array.from(optionsContainer.children).forEach(button => {
        setStatusClass(button, button.innerText === currentQuestions[currentQuestionIndex].answer);
        button.disabled = true;
    });
    
    feedbackTextEl.innerText = currentQuestions[currentQuestionIndex].explanation;
    feedbackContainer.classList.remove('hidden');

    if (currentQuestions.length > currentQuestionIndex + 1) {
        nextBtn.classList.remove('hidden');
    } else {
        progressBar.style.width = '100%';
        setTimeout(showResults, 2000);
    }
}

function setStatusClass(element, correct) {
    if (correct) {
        element.classList.add('correct');
    } else if (element.classList.contains('option-btn') && element.disabled) {
         element.classList.add('incorrect');
    }
}

function showResults() {
    clearInterval(timerInterval);
    timerEl.innerText = '';
    quizScreen.classList.add('hidden');
    resultsScreen.classList.remove('hidden');
    const total = currentQuestions.length;
    const percentage = Math.round((score / total) * 100);
    finalScoreEl.innerText = `${score} / ${total} (${percentage}%)`;
    
    let message = '';
    if (percentage >= 80) {
        message = 'Desempenho excelente! Você está muito bem preparado(a) para o estilo dessas bancas.';
    } else if (percentage >= 60) {
        message = 'Ótimo resultado! Continue revisando os temas para garantir um desempenho ainda melhor.';
    } else if (percentage >= 40) {
        message = 'Bom esforço! Identifique os temas que teve mais dificuldade e foque neles.';
    } else {
        message = 'Não desanime! Cada simulado é um passo no aprendizado. Revise as explicações e tente novamente.';
    }
    scoreMessageEl.innerText = message;
}

startBtn.addEventListener('click', startQuiz);
nextBtn.addEventListener('click', () => {
    currentQuestionIndex++;
    showQuestion();
});
restartBtn.addEventListener('click', startQuiz);
if (printBtn) {
    printBtn.addEventListener('click', () => window.print());
}

