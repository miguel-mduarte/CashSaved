document.addEventListener('DOMContentLoaded', () => {
    // Gráfico de Receitas e Despesas no Dashboard
    const extratoElement = document.getElementById('extratoChart');
    if (extratoElement) {
        const extratoCtx = extratoElement.getContext('2d');
        const extratoChart = new Chart(extratoCtx, {
            type: 'bar',
            data: {
                labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio'],
                datasets: [{
                    label: 'Receitas',
                    data: [5000, 7000, 8000, 6000, 9000],
                    backgroundColor: 'rgba(0, 132, 105, 0.7)',
                    borderColor: 'rgba(0, 132, 105, 1)',
                    borderWidth: 1
                }, {
                    label: 'Despesas',
                    data: [3000, 4000, 5000, 3500, 4500],
                    backgroundColor: 'rgba(255, 99, 132, 0.7)',
                    borderColor: 'rgba(255, 99, 132, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'top',
                    },
                },
            }
        });
    }

    // Gráfico de Projeções
    const projecoesElement = document.getElementById('projecoesChart');
    if (projecoesElement) {
        const projecoesCtx = projecoesElement.getContext('2d');
        const projecoesChart = new Chart(projecoesCtx, {
            type: 'line',
            data: {
                labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio'],
                datasets: [{
                    label: 'Projeção de Saldo',
                    data: [2000, 3000, 4000, 5000, 6000],
                    backgroundColor: 'rgba(0, 132, 105, 0.2)',
                    borderColor: 'rgba(0, 132, 105, 1)',
                    borderWidth: 2,
                    fill: true
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'top',
                    },
                },
            }
        });
    }

    // Gráfico de Gastos por Categoria
    const categoriaElement = document.getElementById('categoriaChart');
    if (categoriaElement) {
        const categoriaCtx = categoriaElement.getContext('2d');
        const categoriaChart = new Chart(categoriaCtx, {
            type: 'pie',
            data: {
                labels: ['Alimentação', 'Transporte', 'Lazer', 'Educação', 'Saúde'],
                datasets: [{
                    label: 'Gastos por Categoria',
                    data: [1200, 800, 600, 400, 1000],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.7)', // Vermelho
                        'rgba(54, 162, 235, 0.7)', // Azul
                        'rgba(255, 206, 86, 0.7)', // Amarelo
                        'rgba(75, 192, 192, 0.7)', // Verde
                        'rgba(153, 102, 255, 0.7)' // Roxo
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'top',
                    },
                },
            }
        });
    }

    // Gráfico de Saldos por Conta
    const contaElement = document.getElementById('contaChart');
    if (contaElement) {
        const contaCtx = contaElement.getContext('2d');
        const contaChart = new Chart(contaCtx, {
            type: 'pie',
            data: {
                labels: ['Banco 1', 'Banco 2', 'Corretora 1', 'Corretora 2'],
                datasets: [{
                    label: 'Saldos por Conta',
                    data: [5000, 3000, 2000, 1000],
                    backgroundColor: [
                        'rgba(0, 132, 105, 0.7)', // Verde Turquesa
                        'rgba(54, 162, 235, 0.7)', // Azul
                        'rgba(255, 206, 86, 0.7)', // Amarelo
                        'rgba(153, 102, 255, 0.7)' // Roxo
                    ],
                    borderColor: [
                        'rgba(0, 132, 105, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(153, 102, 255, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'top',
                    },
                },
            }
        });
    }
});