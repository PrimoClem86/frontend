document.getElementById('entregaForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const placa = document.getElementById('placa').value;
    const quilometragem = document.getElementById('quilometragem').value;
    const horaSaida = document.getElementById('horaSaida').value;

    try {
        const response = await fetch('http://localhost:5006/assets/js/entrega.html', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ placa, quilometragem, horaSaida })
        });

        if (response.ok) {
            alert('Entrega registrada com sucesso!');
        } else {
            alert('Falha ao registrar entrega');
        }
    } catch (error) {
        console.error('Erro:', error);
    }
});
