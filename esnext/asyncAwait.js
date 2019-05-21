const http = require('http')

const getTurma = letra => { //callback para ser chamado quando o arquivo json tiver totalmente carregado
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    return new Promise((resolve, reject) => {
        http.get(url, res => {
            //os dados não chegam todos de uma vez, chegam parcialmente, por isso tem que ir concatenando
            let resultado = ''
    
            res.on('data', dados => { //intercepta o evento de resposta chamado on data
                resultado += dados    //quando quando os dados vem chegando
            })
    
            //quando terminar de chegar todos os dados
            res.on('end', () => {
                try {
                    resolve(JSON.parse(resultado))
                } catch (error) {
                    reject(error)
                }
            })
        })
    })
}

//simplificando o uso de promises
let obterAlunos = async () => {
    const turmaA = await getTurma('A')
    const turmaB = await getTurma('B')
    const turmaC = await getTurma('C')
    return [].concat(turmaA,turmaB, turmaC)
}

obterAlunos()
    .then(alunos => alunos.map(a => a.nome))
    .then(nomes => console.log(nomes))