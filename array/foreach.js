const aprovados = ['aaa', 'bbb', 'ccc', 'ddd']

aprovados.forEach(function(nome, indice){ //função callback
    //primeiro param - item do array
    //segundo param - indice do array
    //pode ser passado um terceiro parametro para o foreach, que é o array

    console.log(`${indice + 1}) ${nome}`)
}) 

//pode passar só com o primeiro parametro
aprovados.forEach(nome => console.log(nome))

//montar função para mostrar aprovados
const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)