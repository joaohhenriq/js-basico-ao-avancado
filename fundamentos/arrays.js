const valores = [7.7 ,8.9, 6.6, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4])

valores[4] = 10
console.log(valores)

valores[6] = 10
console.log(valores) // vai mostrar o indice 5 como vazio
//ex: [ 7.7, 8.9, 6.6, 9.2, <1 empty item>, 10 ]

console.log(valores.length)

valores.push({id: 3}, false, null, 'teste') //insere valores nos próximos indices do array
console.log(valores)

console.log(valores.pop()) //tira o último índice do array

delete valores[0] //delete o valor do indice indicado, mas mantém o indice, com o valor vazio
console.log(valores)

console.log(typeof valores)