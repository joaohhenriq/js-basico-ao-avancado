var a = 3 // variável a
let b = 4 // crie variáveis usando let, regra geral

var a = 30 //com var, pode redeclarar a variável dentro de um mesmo escopo, e com let não
//let b = 40 // não dá certo pq já tá declarado
b = 40

console.log(a, b)

a = 300
b = 400

console.log(a, b)

const c = 5
c = 50 // vai dar erro pq é uma constante