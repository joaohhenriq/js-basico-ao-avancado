require('./global') // não precisa atribuir pra uma variável pq assim que carrega ele, já fica 'global'

console.log(minhaApp.saudacao())

minhaApp.nome = 'Eita'
console.log(minhaApp.nome)
// se não tivesse o freeze no global.js, era possível mudar a variável nesta classe