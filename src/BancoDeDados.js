// refe: https://www.udemy.com/course/curso-web/learn/lecture/9344764#overview

const sequence = {
    _id: 1,

    get id() {
        return this._id++
    }
}

const produtos = {}

function salvarProduto(produto) {
    if (!produto.id) produto.id = sequence.id
    produtos[produto.id] = produto
    return produto
}

function getProduto(id) {
    return produtos[id] || {}
}

function getProdutos() {
    return Object.values(produtos)
}
// Excluir produtos
function excluirProduto(id) {
    const produto = produtos[id]
    delete produtos[id]
    return produto
}
// deixando as funções acima acessiveis ou visiveis para outros arquivos precisamos chamar o module.exports{} e colcar as funções que vao ficar visisveis

module.exports = {
    salvarProduto,
    getProduto,
    getProdutos,
    excluirProduto
}