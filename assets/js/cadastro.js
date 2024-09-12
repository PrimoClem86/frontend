document.getElementById('cadastroForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const nome = document.getElementById('nome').value;
    const cargo = document.getElementById('cargo').value;
    const matricula = document.getElementById('matricula').value;
    const telefone = document.getElementById('telefone').value;
    const usuario = document.getElementById('usuario').value;
    const senha = document.getElementById('senha').value;

    try {
        const response = await fetch('http://localhost:5006/assets/js/cadastro.html', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ nome, cargo, matricula, telefone, usuario, senha })
        });

        if (response.ok) {
            alert('Usuário cadastrado com sucesso!');
            window.location.href = 'login.html'; // Redireciona para a página de login
        } else {
            alert('Falha ao cadastrar usuário');
        }
    } catch (error) {
        console.error('Erro:', error);
    }
});
