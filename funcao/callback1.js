const fabricantes = ['a', 'b', 'c']

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir)
fabricantes.forEach(function(a){
    console.log(a)
})
// ou
fabricantes.forEach(a => console.log(a))
