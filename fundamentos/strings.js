const escola = "Cod3r"

console.log(escola.charAt(4)) // retorna r
console.log(escola.charAt(5)) // retorna valor vazio

console.log(escola.charCodeAt(3)) // valor na tabela ascii]
console.log(escola.indexOf('3'))
console.log(escola.substring(1))
console.log(escola.substring(0, 3))
console.log('Escola '.concat(escola).concat("!"))
console.log(escola.replace(3, 'e'))

console.log('Ana,Maria,Pedro'.split(',')) //gera um array, separando pelo que está no segundo parametro