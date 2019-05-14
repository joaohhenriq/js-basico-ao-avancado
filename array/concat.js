const filhas = ['aaa', 'bbb']
const filhos = ['ccc', 'ddd']
const todos = filhas.concat(filhos)
console.log(todos, filhas, filhos)
// concat não muda o array original

//pode acrescentar mais um item no array
const todos2 = filhas.concat(filhos, 'Wesley')
console.log(todos2, filhas, filhos)


console.log([].concat([1,2],[3,4], 5, [[6,7]])) //resultado [ 1, 2, 3, 4, 5, [ 6, 7 ] ]