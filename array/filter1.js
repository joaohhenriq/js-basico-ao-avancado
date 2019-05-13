const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'bbb', preco: 4199, fragil: true},
    {nome: 'ccc', preco: 12.49, fragil: true},
    {nome: 'ddd', preco: 18.99, fragil: false},
]

console.log(produtos.filter(function(p){ // p é cada um dos itens do array
    return p.preco > 2500 //vai montar um array somente onde o retorno der true. Não modifica o array original
}))

console.log(produtos.filter(p => p.preco >= 500).filter(p => p.fragil))