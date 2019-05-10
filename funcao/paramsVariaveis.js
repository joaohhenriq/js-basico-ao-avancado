function soma(){ //não explicitou um parametro, mas mesmo assim pode ser passado e capturado
    let soma = 0
    for (i in arguments){ //arguments é um array interno em uma função, que contém todos os argumentos que foram passados pra ele        
        soma += arguments[i]
    }

    return soma
}

console.log(soma())
console.log(soma(1))
console.log(soma(1.1, 2.2, 3.3))
console.log(soma('a', 'b', 'c'))