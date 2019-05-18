const fs = require('fs')

const produto = {
    nome: 'Celular',
    preco: 1212.99,
    desconto: 0.15
}

//transforma o objeto em json
fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), err => {
    console.log(err || 'Arquivo salvo!') //se err for null, mostra a msg 
})