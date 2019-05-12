const pilotos = ['Vettle', 'Alonso', 'aaaa', 'Massa']
pilotos.pop() // remove o último elemento do array
console.log(pilotos)

pilotos.push('BBBBB') //adiciona um item no array na última posição

pilotos.shift() //remove o primeiro elemento da lista

pilotos.unshift('Hamilton') //adiciona o item no primeiro indice da lista

//splice - adiciona e remove elementos

//adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos) // no indice 2, não remove nada, e adiciona os dois, empurrando o resto pra frente

//remover
pilotos.splice(3, 1)
console.log(pilotos) // remove apenas 1 item, do indice 3

const algunsPilotos1 = pilotos.slice(2) //Cria um novo array, pegando a partir do indice passado no param
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4)//pega os itens do indice 1 até o indice 3, ou seja, um item
// antes do passado no segundo param
console.log(algunsPilotos2)