function rand({min = 0, max = 1000}){ // aqui usa o destructuring
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand({max: 50, min: 40})) // e aqui usa um objeto

//ou 
// const obj = {max: 50, min: 40}
// console.log(rand(obj))

console.log(rand({min: 998})) // pega numeros entre 998 e 1000
console.log(rand({})) //pega valores entre 0 e 1000, os valores default
console.log(rand()) //dá erro, pq vai falar que min e max são undefined ou null