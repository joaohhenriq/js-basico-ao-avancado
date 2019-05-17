const moduloA = require('../../moduloA') // usa require para acessar módulos externos da aplicação
console.log(moduloA.ola)

const saudacao = require('saudacao') //modulos dentro da node_modules não precisa do caminho relativo
console.log(saudacao.ola)            //porém devem possuir o arquivo index.js, senão não encontra o módulo

// const http = require('http')
// http.createServer((req, res) => {
//     res.write('Bom dia!')
//     res.end()
// }).listen(8080)

// const c = require('./pastaC/index')
const c = require('./pastaC') // como a pasta c possui um index.js, não precisa fazer a referência para esse
console.log(c.ola2)           // arquivo, basta chamar a pasta direto. Se fosse um outro nome, index2.js,
                              // por ex, aí teria que referenciar o arquivo depois da pasta