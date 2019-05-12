//Criando um foreach na mão
Array.prototype.forEach2 = function(callback){
    for(let i = 0; i < this.length; i++){
        callback(this[i], i, this) //elemtno, indice, array
    }
}

const aprovados = ['aaa', 'bbb', 'ccc', 'ddd']

aprovados.forEach2(function(nome, indice){ //função callback
    //primeiro param - item do array
    //segundo param - indice do array
    //pode ser passado um terceiro parametro para o foreach, que é o array

    console.log(`${indice + 1}) ${nome}`)
}) 