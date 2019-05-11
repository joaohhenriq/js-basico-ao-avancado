const notas= [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

//sem callback
const notasBaixas = []
for(let i in notas){
    if(notas[i] < 7){
        notasBaixas.push(notas[i])
    }
}

console.log(notasBaixas)

//usando callback
const notasBaixas2 = notas.filter(function(nota) {
    return nota < 7 //oque for true vai ser add no novo array, o que for falso não
})

console.log(notasBaixas2)

//ou poderia passar a função para uma const e deixar ela reutilizavel
//const notasMenorQue7 = nota => nota < 7 
const notasBaixas3 = notas.filter(nota => nota < 7 /*e aqui poderia passar notasMenorQue7*/)
console.log(notasBaixas3)