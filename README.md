# SIMULOTTO

A simple simulator with 50 ENT (Ear, Nose and Throat) questions used for practice tests.

## How to run

1. Clone or download the repository.
2. Open `index.html` in a modern browser. No build step is required.
3. Tailwind CSS is loaded via CDN so an internet connection is needed the first time you open it.
4. Styling and behaviour have been extracted into `styles.css` and `script.js` for easier editing.

## Adding questions

The questions live in the `questionBank` array inside `script.js`. Each entry is an object with the following fields:

```javascript
{
  banca: 'VUNESP',            // the exam board
  question: 'Question text',  // the question itself
  options: ['A', 'B', 'C'],   // array of possible answers
  answer: 'B',                // the correct option
  explanation: 'Why B is correct.'
}
```

Add a new object to this array to include more questions in the quiz.
