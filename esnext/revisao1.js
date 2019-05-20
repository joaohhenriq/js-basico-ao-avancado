//let escopo de bloco
//var escopo global

{
    var a = 2
    let b = 3
}

console.log(a) //mostra 2
// console.log(b) //dá erro

// template string
const produto = 'iPad'
console.log(`${produto} é caro`)

//destructuring
const [c, d, ...letras] = "Cod3r"
console.log(c, d, letras) //resultado: C o [ 'd', '3', 'r' ]

const [x, , y] = [1,2,3]
console.log(x,y) // 1 3

const {idade, nome} = {nome: 'Ana', idade: 12}
console.log(nome, idade)

const {idade: i, nome: n} = {nome: 'Ana', idade: 12}
console.log(i, n)