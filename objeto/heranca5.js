console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)
//são funções, então possuem o prototype

String.prototype.reverse = function(){
    return this.split('').reverse().join('')
    //split quebra a string, gera um array com todos os elementos da string, inclusive os espaços em branco
    //reverse inverte os itens do array (reverse é uma função do array, que reverte os elementos de posição)
    //join junta os itens do array em uma string novamente
}

console.log('Escola Cod3r'. reverse())
//Como 'Escola Cod3r' é uma string, e adicionamos o método reverse no prototype dela, conseguimos usar
// o mesmo

Array.prototype.first = function(){
    return this[0]
}

console.log([1,2,3,4,5].first())
console.log(['A', 'B', 'C'].first())

String.prototype.toString = function(){ //substituindo um comportamento que já existe
    return 'Lascou tudo'
}

console.log('Escola Cod3r'.reverse())