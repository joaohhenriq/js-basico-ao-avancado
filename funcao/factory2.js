function criarProduto(nome, preco){
    return {
        nome, //poderia ser nome: nome, mas como é igual, o js permite passar só um
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('aa', 22.00))
console.log(criarProduto('bb', 33.00))