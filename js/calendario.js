document.addEventListener('DOMContentLoaded', () => {
    const meses = [
        "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
        "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
    ];
    const receitas = 5000; // Salário padrão
    const despesas = [4500, 4800, 3900, 4100, 8000, 4700, 4200, 4300, 4400, 4100, 3900, 4600];

    const calendario = document.getElementById('calendario');
    calendario.innerHTML = ''; // Limpa os cards anteriores

    meses.forEach((mes, i) => {
        const saldo = receitas - despesas[i];
        const cor = saldo >= 0 ? "success" : "danger";
        const card = `
            <div class="col-md-4 mb-4">
                <div class="card shadow">
                    <div class="card-header bg-${cor} text-white text-center">
                        <h4 class="mb-0 mes">${mes}</h4>
                    </div>
                    <div class="card-body text-center">
                        <h5 class="card-title">Resumo</h5>
                        <p class="card-text">Receitas: R$ ${receitas.toFixed(2).replace(".", ",")}</p>
                        <p class="card-text">Despesas: R$ ${despesas[i].toFixed(2).replace(".", ",")}</p>
                        <p class="card-text text-${cor}">Saldo: R$ ${(saldo).toFixed(2).replace(".", ",")}</p>
                        <button class="btn btn-success me-2"><i class="bi bi-plus-circle"></i></button>
                        <button class="btn btn-danger"><i class="bi bi-dash-circle"></i></button>
                    </div>
                </div>
            </div>`;
        calendario.innerHTML += card;
    });
});