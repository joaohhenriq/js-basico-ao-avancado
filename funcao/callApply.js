function getPreco(imposto = 0, moeda = 'R$'){
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco
}

console.log(getPreco()) // NaN
console.log(produto.getPreco()) //chama de dentro do objeto

const carro = {preco: 49990, desc: 0.20}

console.log(getPreco.call(carro)) //chama passando o objeto
console.log(getPreco.apply(carro)) //chama passando o objeto

console.log(getPreco.call(carro, 0.17, '$'))// primeiro param é o contexto, e então os demais parâmetros da função
console.log(getPreco.apply(carro, [0.17, '$']))// primeiro param é o contexto, e os demais são passados em um array