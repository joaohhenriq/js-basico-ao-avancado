const porta = 3003

const express = require('express')
const app = express()

// app.get('/produtos', (req, res, next) => {
//     console.log('Middleware 1...')
//     next() // se não passar param, apenas chama o middleware logo abaixo deste
// })

// app.use((req, res, next) => { //usando o use, e sem passar o endpoint, pode passar qlq endpoint na url que funciona
//                               //ex: http://localhost:3003/produtosasdzxcv
//     res.send({nome: 'Notebook', preco: 123.45})
// })

app.get('/produtos', (req, res, next) => {
    res.send({nome: 'Notebook', preco: 123.45}) //função send envia uma resposta, convertendo para json
})

app.listen(porta, () => {
    console.log(`Servidor executando na porta ${porta}...`)
})