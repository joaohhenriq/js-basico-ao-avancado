const http = require('http')

const getTurma = (letra, callback) => { //callback para ser chamado quando o arquivo json tiver totalmente carregado
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    http.get(url, res => {
        //os dados não chegam todos de uma vez, chegam parcialmente, por isso tem que ir concatenando
        let resultado = ''

        res.on('data', dados => { //intercepta o evento de resposta chamado on data
            resultado += dados    //quando quando os dados vem chegando
        })

        //quando terminar de chegar todos os dados
        res.on('end', () => {
            callback(JSON.parse(resultado))//vai retornar o resultado como um objeto
        })
    })
}

let nomes = []
getTurma('A', alunos => {
    nomes = nomes.concat(alunos.map(a => `A: ${a.nome}`))
    getTurma('B', alunos => {
        nomes = nomes.concat(alunos.map(a => `B: ${a.nome}`))
        getTurma('C', alunos => {
            nomes = nomes.concat(alunos.map(a => `C: ${a.nome}`))
            console.log(nomes)
        })
    })
})