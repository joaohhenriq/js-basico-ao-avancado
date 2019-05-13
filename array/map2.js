// desafio - retornar um array somente com os preços
const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Lapises", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}',
]

const resultado = carrinho.map(e => JSON.parse(e)).map(e => e.preco)
console.log(resultado)

//ou separando em métodos
// const paraObjeto = json => JSON.parse(json)
// const apenasPreco = produto => produto.preco