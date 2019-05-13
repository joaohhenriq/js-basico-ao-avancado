Array.prototype.filter2 = function(callback){
    const newArray = []
    for(let i = 0; i < this.length; i++){
        if(callback(this[i], i, this)){
            newArray.push(this[i])
        }
    }

    return newArray
}

const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'bbb', preco: 4199, fragil: true},
    {nome: 'ccc', preco: 12.49, fragil: true},
    {nome: 'ddd', preco: 18.99, fragil: false},
]

console.log(produtos.filter2(p => p.preco >= 500).filter2(p => p.fragil))