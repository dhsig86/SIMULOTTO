# SIMULOTTO


Simulador de questões de otorrinolaringologia para concursos. Basta abrir `index.html` em um navegador para utilizar.

O projeto utiliza [Tailwind CSS](https://tailwindcss.com) via CDN e possui o estilo em `styles.css` e a lógica em `script.js`.

As questões estão definidas em `data/questions.json`. Cada entrada possui `banca`, `question`, `options`, `answer`, `explanation` e `area`.

Ao final do simulado é possível exportar um log das questões anuladas clicando em **Exportar Log** na tela de resultados.

## Como adicionar questões

Edite `data/questions.json` e acrescente novas questões seguindo o formato abaixo.

```json
{
  "banca": "Banca Exemplo",
  "question": "Enunciado da questão",
  "options": [
    "Alternativa A",
    "Alternativa B",
    "Alternativa C",
    "Alternativa D",
    "Alternativa E"
  ],
  "answer": "Alternativa A",
  "explanation": "Breve justificativa.",
  "area": "Otologia"
}
```
## Licença

Distribuído sob a licença MIT. Consulte o arquivo `LICENSE` para mais detalhes.
