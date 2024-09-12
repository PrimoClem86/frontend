document.getElementById('chegadaForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const placa = document.getElementById('placa').value;
    const quilometragem = document.getElementById('quilometragem').value;
    const horaChegada = document.getElementById('horaChegada').value;

    try {
        const response = await fetch('http://localhost:5006/assets/js/chegada.html', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ placa, quilometragem, horaChegada })
        });

        if (response.ok) {
            alert('Chegada registrada com sucesso!');
        } else {
            alert('Falha ao registrar chegada');
        }
    } catch (error) {
        console.error('Erro:', error);
    }
});
