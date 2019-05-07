// função sem retorno

function imprimirSoma(a, b){
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2) // NaN - not a number, pq passa só um valor
imprimirSoma(2, 10, 3, 4, 5, 8, 11) //utiliza os dois primeiros parâmetros e ignora o resto
imprimirSoma() // NaN, não dá erro na execução

//função com retorno
function soma(a, b = 1){ //coloca um valor default para b
    return a + b
}

console.log(soma(10,15))
console.log(soma(10))