const nums = [1,2,3,4,5]

//map recebe três parametros, valor, indice e o array
let resultado = nums.map(function(e){
    return e * 2
})

console.log(resultado)
// map não modifica o map atual, apenas gera um novo

const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

resultado = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado)