// Obtém os parâmetros da URL
const urlParams = new URLSearchParams(window.location.search);
const nome = urlParams.get('nome');
const matricula = urlParams.get('matricula');
const cargo = urlParams.get('cargo');

// Exibe as informações no canto esquerdo superior
if (nome && matricula && cargo) {
    document.getElementById('userInfo').innerHTML = `
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>Matrícula:</strong> ${matricula}</p>
        <p><strong>Cargo:</strong> ${cargo}</p>
    `;
}
