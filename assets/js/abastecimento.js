document.getElementById('abastecimentoForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const placa = document.getElementById('placa').value;
    const quilometragem = document.getElementById('quilometragem').value;
    const combustivel = document.getElementById('combustivel').value;
    const litros = document.getElementById('litros').value;
    const valor = document.getElementById('valor').value;
    const data = document.getElementById('data').value;
    const hora = document.getElementById('hora').value;

    try {
        const response = await fetch('http://127.0.0.1:5006/pages/abastecimento.html', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ placa, quilometragem, combustivel, litros, valor, data, hora })
        });

        if (response.ok) {
            alert('Abastecimento registrado com sucesso!');
        } else {
            alert('Falha ao registrar abastecimento');
        }
    } catch (error) {
        console.error('Erro:', error);
    }
});
