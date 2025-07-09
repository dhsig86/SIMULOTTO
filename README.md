# SIMULOTTO

Simulador de questões de otorrinolaringologia para concursos. Basta abrir `index.html` em um navegador para utilizar.

O projeto utiliza [Tailwind CSS](https://tailwindcss.com) via CDN e possui o estilo em `styles.css` e a lógica em `script.js`.

As questões estão definidas em `script.js` em um array `questionBank`. Cada entrada possui banca, enunciado, opções de resposta, explicação e uma lista de `tags` usadas para futuras filtragens.

## Como adicionar questões

Edite `script.js` e acrescente novos objetos ao `questionBank` seguindo o mesmo formato dos existentes.

## Licença

Distribuído sob a licença MIT. Consulte o arquivo `LICENSE` para mais detalhes.
