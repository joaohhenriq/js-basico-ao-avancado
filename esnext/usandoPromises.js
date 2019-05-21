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

// let nomes = []
// getTurma('A', alunos => {
//     nomes = nomes.concat(alunos.map(a => `A: ${a.nome}`))
//     getTurma('B', alunos => {
//         nomes = nomes.concat(alunos.map(a => `B: ${a.nome}`))
//         getTurma('C', alunos => {
//             nomes = nomes.concat(alunos.map(a => `C: ${a.nome}`))
//             console.log(nomes)
//         })
//     })
// })

//Espera todas as promises serem resolvidas ou rejeitadas para chamar a cadeia then
//Chama uma lista de promises
Promise.all([getTurma('A'), getTurma('B'), getTurma('C')])
    // .then(x => console.log(x)) //mostra as três classes, cada um em um array (Array de arrays)
    .then(turmas => [].concat(...turmas)) //juntas os arrays das classes em um único array
    .then(alunos => alunos.map(aluno => aluno.nome))//pega apenas os nomes dos alunos
    .then(nomes => console.log(nomes))
    .catch(e => console.log(e.message))

getTurma('D').catch(e => console.log(e.message))