let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

aprovados.sort() //sem passar nada, ordena alfabeticamente
console.log(aprovados)

// SPLICE
//primeiro parametro será o índice do array que onde as alterações irão começar
// o segundo será quantos elementos do array devem ser deletados a partir do indice do primeiro param
// os demais params são os elementos adicionados logo em seguida do indice do primeiro param

aprovados.splice(1, 1) // Fixa no indice passado, e deleta um registro
console.log(aprovados)

aprovados.splice(1, 0, 'Elem1', 'Elem2') //Fixa no indice passado, não apaga nenhum registro, 
console.log(aprovados) // e insere mais dois na posição do indice do primeiro param