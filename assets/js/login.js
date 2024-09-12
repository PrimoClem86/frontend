document.querySelector('#formLogin')?.addEventListener('submit', async function(e) {
    e.preventDefault();

    const usuario = document.querySelector('#usuario').value;
    const senha = document.querySelector('#senha').value;

    const data = { usuario, senha };

    try {
        const result = await postData('http://localhost:5006/assets/js/login.html', data); // Endpoint para login
        if (result.success) {
            alert('Login realizado com sucesso!');
            // Redirecionar para a página principal
            window.location.href = '/index.html'; 
        } else {
            alert(result.message || 'Erro no login. Tente novamente.');
        }
    } catch (error) {
        console.error('Erro:', error);
        alert('Erro ao tentar fazer login. Verifique sua conexão.');
    }
});

async function postData(url = '', data = {}) {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    return response.json(); // Retorna a resposta da API
}
