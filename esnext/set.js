//não aceita repetição/ não indexado

const times = new Set()
times.add('A')
times.add('B').add('E').add('F')
times.add('C')
times.add('A') //não adiciona novamente

console.log(times)
console.log(times.size)
console.log(times.has('B'))
times.delete('A')
console.log(times.has('A'))

const nomes = ['Raquel', 'Lucas', 'Julia', 'Lucas']
const nomesSet = new Set(nomes)
console.log(nomesSet)