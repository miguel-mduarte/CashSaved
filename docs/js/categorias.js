const criarCategoriaBtn = document.getElementById('criarCategoria');
const formularioCategoria = document.getElementById('formularioCategoria');
const novaCategoriaForm = document.getElementById('novaCategoriaForm');
const listaCategorias = document.getElementById('listaCategorias');

// Exibir ou ocultar o formulário de criação de categoria
criarCategoriaBtn.addEventListener('click', () => {
    formularioCategoria.classList.toggle('d-none');
});

// Adicionar nova categoria
novaCategoriaForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const nome = document.getElementById('nomeCategoria').value;
    const descricao = document.getElementById('descricaoCategoria').value;
    const tipo = document.getElementById('tipoCategoria').value;
    const cor = document.getElementById('corCategoria').value;
    const icone = document.getElementById('iconeCategoria').value;

    const novaCategoria = `
        <tr>
            <td>
                <div style="background-color: ${cor}; color: white; text-align: center; border-radius: 15px;"
                <i class="${icone}"></i>
            </td>
            <td>${nome}</td>
            <td>${descricao}</td>
            <td>${tipo.charAt(0).toUpperCase() + tipo.slice(1)}</td>
            <td>R$ 0,00</td>
            <td>
                <button class="btn btn-primary btn-sm"><i class="bi bi-pencil"></i> Editar</button>
                <button class="btn btn-danger btn-sm"><i class="bi bi-trash"></i> Excluir</button>
            </td>
        </tr>`;
    listaCategorias.insertAdjacentHTML('beforeend', novaCategoria);

    // Limpar formulário e ocultar
    novaCategoriaForm.reset();
    formularioCategoria.classList.add('d-none');
});