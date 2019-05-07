const nome = "joao"
const concatenacao = "Olá " + nome + '!';
console.log(concatenacao)
const template = `
    Olá 
    ${nome} !
`
console.log(template)

//expressoes
console.log(`1 + 1 = ${1 + 1}`)

const up = t => t.toUpperCase()
console.log(`Ei... ${up('cuidado')}`)