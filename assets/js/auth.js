const apiBaseUrl = 'http://localhost:5006'; // Substitua pela URL do seu backend

// Função para fazer requisições POST
async function postData(url = '', data = {}) {
    const response = await fetch(`${apiBaseUrl}${url}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        usuario: 'exampleUser',
        senha: 'examplePassword'
    });
    return response.json();
}

// Função para fazer requisições GET
async function getData(url = '') {
    const response = await fetch(`${apiBaseUrl}${url}`);
    return response.json();
}

// Exemplo de uso no cadastro de usuários
document.querySelector('#formCadastro')?.addEventListener('submit', async function(e) {
    e.preventDefault();
    const nome = document.querySelector('#nome').value;
    const cargo = document.querySelector('#cargo').value;
    const matricula = document.querySelector('#matricula').value;
    const telefone = document.querySelector('#telefone').value;
    const usuario = document.querySelector('#usuario').value;
    const senha = document.querySelector('#senha').value;

    const data = { nome, cargo, matricula, telefone, usuario, senha };

    const result = await postData('/auth/register', data);
    alert(result.message); // Exiba uma mensagem de sucesso ou erro
});
