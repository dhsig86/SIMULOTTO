let questionBank = [];
const totalQuestionsEl = document.getElementById('total-questions');
const progressInfoEl = document.getElementById('progress-info');
const includeDoneCheckbox = document.getElementById('include-done');
const clearProgressBtn = document.getElementById('clear-progress');

function loadProgress() {
    try {
        const stored = localStorage.getItem('completedQuestions');
        return stored ? JSON.parse(stored) : [];
    } catch (e) {
        return [];
    }
}

function saveProgress(questionText) {
    if (!questionText) return;
    if (!completedQuestions.includes(questionText)) {
        completedQuestions.push(questionText);
        localStorage.setItem('completedQuestions', JSON.stringify(completedQuestions));
        updateProgressUI();
    }
}

function clearProgress() {
    localStorage.removeItem('completedQuestions');
    completedQuestions = [];
    updateProgressUI();
}

function updateProgressUI() {
    if (progressInfoEl && questionBank.length) {
        progressInfoEl.textContent = `Você já respondeu ${completedQuestions.length} de ${questionBank.length} questões.`;
    }
}

let completedQuestions = loadProgress();

fetch('data/questions.json')
  .then(res => res.json())
  .then(data => {
    questionBank = data;
    if (totalQuestionsEl) {
      totalQuestionsEl.textContent = questionBank.length;
    }
    updateProgressUI();
  });

const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultsScreen = document.getElementById('results-screen');

const startBtn = document.getElementById('start-btn');
const nextBtn = document.getElementById('next-btn');
const restartBtn = document.getElementById('restart-btn');
const printBtn = document.getElementById('print-btn');
const flagBtn = document.getElementById('flag-btn');
const showFlaggedBtn = document.getElementById('show-flagged-btn');
const flaggedListEl = document.getElementById('flagged-questions');
const showWrongBtn = document.getElementById('show-wrong-btn');
const wrongListEl = document.getElementById('wrong-questions');
const exportLogBtn = document.getElementById('export-log-btn');
const homeBtn = document.getElementById('home-btn');
const helpBtn = document.getElementById('help-btn');
const helpModal = document.getElementById('help-modal');
const helpClose = document.getElementById('help-close');

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
let flaggedQuestions = [];
let wrongQuestions = [];

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function startQuiz() {
    const num = parseInt(numQuestionsInput.value, 10) || questionBank.length;
    const selectedAreas = Array.from(areaCheckboxes)
        .filter(cb => cb.checked)
        .map(cb => cb.value);

    let bank = selectedAreas.length
        ? questionBank.filter(q => selectedAreas.includes(q.area))
        : [...questionBank];

    if (!(includeDoneCheckbox && includeDoneCheckbox.checked)) {
        bank = bank.filter(q => !completedQuestions.includes(q.question));
    }

    if (bank.length === 0) {
        alert('Nenhuma questão disponível para as áreas selecionadas.');
        return;
    }

    shuffle(bank);
    currentQuestions = bank.slice(0, Math.min(num, bank.length));
    currentQuestionIndex = 0;
    score = 0;
    flaggedQuestions = [];
    wrongQuestions = [];
    if (flaggedListEl) {
        flaggedListEl.innerHTML = '';
        flaggedListEl.classList.add('hidden');
    }
    if (wrongListEl) {
        wrongListEl.innerHTML = '';
        wrongListEl.classList.add('hidden');
    }
    if (flagBtn) {
        flagBtn.disabled = false;
        flagBtn.innerText = 'Anular Questão';
        flagBtn.classList.remove('opacity-50', 'cursor-not-allowed');
    }

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
    if (flagBtn) {
        flagBtn.disabled = false;
        flagBtn.innerText = 'Anular Questão';
        flagBtn.classList.remove('opacity-50', 'cursor-not-allowed');
    }
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
    const question = currentQuestions[currentQuestionIndex];
    const correctAnswer = question.answer;
    let isCorrect = selectedBtn.innerText === correctAnswer ||
        flaggedQuestions.includes(question);

    if (isCorrect) {
        score++;
        scoreCounterEl.innerText = `Pontos: ${score}`;
    } else {
        wrongQuestions.push({
            question: question.question,
            chosen: selectedBtn.innerText,
            correct: question.answer
        });
    }

    saveProgress(question.question);

    // Highlight the selected option based on correctness
    selectedBtn.classList.add(isCorrect ? 'correct' : 'incorrect');

    // Disable all options and mark the correct one
    Array.from(optionsContainer.children).forEach(button => {
        if (button.innerText === correctAnswer) {
            button.classList.add('correct');
        }
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

function flagCurrentQuestion() {
    const question = currentQuestions[currentQuestionIndex];
    if (!flaggedQuestions.includes(question)) {
        flaggedQuestions.push(question);
    }
    if (flagBtn) {
        flagBtn.disabled = true;
        flagBtn.innerText = 'Questão Anulada';
        flagBtn.classList.add('opacity-50', 'cursor-not-allowed');
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

    if (flaggedListEl) {
        if (flaggedQuestions.length > 0) {
            const items = flaggedQuestions.map(q => `<li class="mb-2">${q.question}</li>`).join('');
            flaggedListEl.innerHTML = `<ul class="list-disc pl-6">${items}</ul>`;
        } else {
            flaggedListEl.innerHTML = '<p>Nenhuma questão foi anulada.</p>';
        }
    }

    if (wrongListEl) {
        if (wrongQuestions.length > 0) {
            const items = wrongQuestions.map(w => `<li class="mb-2"><strong>${w.question}</strong><br>Sua resposta: ${w.chosen}<br>Correta: ${w.correct}</li>`).join('');
            wrongListEl.innerHTML = `<ul class="list-disc pl-6">${items}</ul>`;
        } else {
            wrongListEl.innerHTML = '<p>Todas as questões foram respondidas corretamente.</p>';
        }
    }
}

function exportFlagged() {
    if (flaggedQuestions.length === 0) {
        alert('Nenhuma questão anulada para exportar.');
        return;
    }
    const dataStr = JSON.stringify(flaggedQuestions, null, 2);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'flagged_questions.json';
    a.click();
    URL.revokeObjectURL(url);
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
if (flagBtn) {
    flagBtn.addEventListener('click', flagCurrentQuestion);
}
if (showFlaggedBtn) {
    showFlaggedBtn.addEventListener('click', () => {
        if (flaggedListEl) {
            flaggedListEl.classList.toggle('hidden');
        }
    });
}
if (showWrongBtn) {
    showWrongBtn.addEventListener('click', () => {
        if (wrongListEl) {
            wrongListEl.classList.toggle('hidden');
        }
    });
}
if (exportLogBtn) {
    exportLogBtn.addEventListener('click', exportFlagged);
}
if (homeBtn) {
    homeBtn.addEventListener('click', () => {
        window.location.href = 'index.html';
    });
}
if (clearProgressBtn) {
    clearProgressBtn.addEventListener('click', clearProgress);
}

if (helpBtn && helpModal && helpClose) {
    helpBtn.addEventListener('click', () => helpModal.classList.remove('hidden'));
    helpClose.addEventListener('click', () => helpModal.classList.add('hidden'));
}

