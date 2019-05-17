console.log(module.exports === this)
console.log(module.exports === exports)

// todos abaixo vão ficar visíveis para fora
this.a = 1
exports.b = 2
module.exports.c = 3

exports = null // mudar o exports não vai mudar o module.exports
console.log(module.exports) 

exports = {
    nome : 'Teste'
}

console.log(module.exports) //ainda não haverá mudanças

module.exports = {publico: true} // mudando o module.exports é que vai trocar o valor que será visto por
// outra classe que pegar o require