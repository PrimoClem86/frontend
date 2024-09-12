document.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await fetch('http://localhost:5006/assets/js/estatistica.html');
        const data = await response.json();

        if (response.ok) {
            // Mostrar os dados de estatísticas na página
            document.getElementById('totalKm').textContent = data.totalKm;
            document.getElementById('totalFuel').textContent = data.totalFuel;
        } else {
            alert('Falha ao carregar estatísticas');
        }
    } catch (error) {
        console.error('Erro:', error);
    }
});
