// ====== declarando variaveis 
const porta = 3033


// ==== importando modulos =====
const express = require('express')
const app = express()
// importando modulo do arquivo BAncoDeDados.js
const bancoDedados = require('./BancoDeDados')
// Importando o bary parser para tratar os arquivos para json naparte do seridor
const bodyParser = require('body-parser')




// === criando fuções com express para trabalhar com  http 


// com o metodo use todas as requisições vao passar por aqui tanto como post quanto get
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/produtos', (req, res, next) => {
    res.send(
        // chamando função externa  do arquivo BancoDeDados.js
        bancoDedados.getProdutos()
    )
})
// aqui como estou utilizando o metodo send será convertido diretamnte para json

// url com parametro id para trazer um produto especifico
app.get('/produtos/:id', (req, res, next) => {
    res.send(bancoDedados.getProduto(req.params.id))
})

// aqui ja teremos um função post para salvar um novo produto
app.post('/produtos', (req, res, next) => {
    const produto = bancoDedados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco,
        fragil: req.body.fragil



    })
    res.send(produto) // send coneverte em json
})

// Excluir produto colocando o id na url
app.delete('/produtos/:id', (req, res, next) => {
    const produto = bancoDedados.excluirProduto(req.params.id)
    res.send(produto) // send coneverte em json
})


// Aqui vamos faszer a alateração e para isso vamos usar o put
app.put('/produtos/:id', (req, res, next) => {
    const produto = bancoDedados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco,
        fragil: req.body.fragil,
        id: req.params.id,



    })
    res.send(produto) // send coneverte em json
})

// Aqui estou colocando o express para ficar executando na porta que escolhemos  3003 por isso que estou utilizando o metodo  listen

app.listen(porta, () => {
    console.log(`Servidor executando na porta ${porta}`)
})