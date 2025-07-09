# SIMULOTTO
ENT EXERCICSES SIMULATOR

## Adding Questions

All quiz questions are stored in `data/questions.json`. To add new items,
append objects to the array using the same structure:

```json
{
  "banca": "NOME_DA_BANCA",
  "question": "Pergunta...",
  "options": ["A", "B", "C", "D", "E"],
  "answer": "Alternativa correta",
  "explanation": "Texto explicativo"
}
```

After saving the file, the application will automatically load the new
questions the next time it runs.
