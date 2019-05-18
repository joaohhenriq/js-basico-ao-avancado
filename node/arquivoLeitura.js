const fs = require('fs') //file system, para ler arquivos

const caminho = __dirname + '/arquivo.json'

// sincrono... espera ler um arquivos completamente para só então liberar a execução
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

//assincrono... usa callback pq é assincrono
fs.readFile(caminho, 'utf-8', (err, conteudo)=> {
    const config = JSON.parse(conteudo) // como vem um json, precisa fazer o parse para passar para objeto
    console.log(config.db.host, config.db.user)
})

//outra forma
const config = require('./arquivo.json') // tem que passar a extensâo senão o node vai procurar por um arquivo js
console.log(config.db)

//na hora de executar, a função assincrona executou após a última forma, justamente por ser assincrono

fs.readdir(__dirname, (err, arquivos) => { //onde __dirname é o caminho do local onde este arquivo está
    console.log('Conteúdo da pasta..')
    console.log(arquivos)
    console.log(err == null ? 'Não há erros' : err)
})