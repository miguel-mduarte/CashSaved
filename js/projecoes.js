 // Simulação de Compras Parceladas
 document.getElementById('simuladorComprasForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const valorCompra = parseFloat(document.getElementById('valorCompra').value);
    const parcelas = parseInt(document.getElementById('parcelas').value);
    const rendaMensal = parseFloat(document.getElementById('rendaMensal').value);

    const valorParcela = valorCompra / parcelas;

    const resultadoTexto = document.getElementById('resultadoTexto');
    const resultadoCompras = document.getElementById('resultadoCompras');

    if (valorParcela > rendaMensal * 0.3) {
        resultadoTexto.textContent = `A parcela de R$ ${valorParcela.toFixed(2)} excede 30% da sua renda mensal. Avalie se é viável realizar essa compra.`;
        resultadoTexto.className = 'text-danger';
    } else {
        resultadoTexto.textContent = `A parcela de R$ ${valorParcela.toFixed(2)} está dentro do limite de 30% da sua renda mensal. A compra é viável.`;
        resultadoTexto.className = 'text-success';
    }

    resultadoCompras.style.display = 'block';
});

// Simulador de Investimentos
document.getElementById('simuladorInvestimentosForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const valorInicial = parseFloat(document.getElementById('valorInicial').value);
    const taxaJuros = parseFloat(document.getElementById('taxaJuros').value) / 100;
    const tempo = parseInt(document.getElementById('tempo').value);

    const labels = Array.from({ length: tempo }, (_, i) => i + 1);
    const dados = labels.map(mes => valorInicial * Math.pow(1 + taxaJuros, mes));

    const ctx = document.getElementById('resultadoChart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Crescimento do Investimento',
                data: dados,
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                tooltip: {
                    mode: 'index',
                    intersect: false,
                }
            },
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Meses'
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Valor Acumulado (R$)'
                    }
                }
            }
        }
    });

    document.getElementById('resultadoInvestimentos').style.display = 'block';
});