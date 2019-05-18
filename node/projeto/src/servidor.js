const porta = 3003

const express = require('express')
const app = express()
const bancoDeDados = require('./bancoDeDados')
const bodyParser = require('body-parser')

// app.get('/produtos', (req, res, next) => {
//     console.log('Middleware 1...')
//     next() // se não passar param, apenas chama o middleware logo abaixo deste
// })

// app.use((req, res, next) => { //usando o use, e sem passar o endpoint, pode passar qlq endpoint na url que funciona
//                               //ex: http://localhost:3003/produtosasdzxcv
//     res.send({nome: 'Notebook', preco: 123.45})
// })

// app.get('/produtos', (req, res, next) => {
//     res.send({nome: 'Notebook', preco: 123.45}) //função send envia uma resposta, convertendo para json
// })

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/produtos', (req, res, next) => {
    res.send(bancoDeDados.getProdutos()) 
})

app.get('/produtos/:id', (req, res, next) => {
    res.send(bancoDeDados.getProduto(req.params.id)) 
})

app.post('/produtos', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })

    res.send(produto)
})

app.put('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        id: req.params.id, //pega o param usado na url, e não no body
        nome: req.body.nome,
        preco: req.body.preco
    })

    res.send(produto)
})

app.delete('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.excluirProduto(req.params.id)

    res.send(produto)
})

app.listen(porta, () => {
    console.log(`Servidor executando na porta ${porta}...`)
})