const sequencia = {
    _valor: 1, // colocar o _ na frente não significa que é privado
               // mas é uma convenção entre programadores para mostrar isso
    get valor() {
        return this._valor++
    },
    set valor(valor){
        if(valor > this._valor)
            this._valor = valor
    }
}

console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 900 // não vai alterar, por causa da condição no set
console.log(sequencia.valor, sequencia.valor)