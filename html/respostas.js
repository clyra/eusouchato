// respostas.js

// se vc abriu esse arquivo para ver as respostas, então vc 
// é muito mais chato do que parece!

// Array com diferentes respostas
const respostas = [
    "Sim, você é!",
    "Se você veio até aqui, com certeza é.",
    "Analizando... 100% chato!",
    "Totalmente chato.",
    "Se você se chama Luiz então é muito chato, se não se chama, é chato mesmo assim.",
    "Sim, hoje vc é chato (amanhã continuará sendo).", 
    "Chato pra caramba!"
    // Adicione mais slogans conforme necessário
];

// Função para escolher uma resposta aleatória
function escolherResposta() {
    const randomIndex = Math.floor(Math.random() * respostas.length);
    return respostas[randomIndex];
}

// Atualiza o texto do elemento h1 com uma resposta aleatória ao carregar a página
document.addEventListener('DOMContentLoaded', function() {
    const respostaElement = document.getElementById('resposta');
    respostaElement.textContent = escolherResposta();
});

