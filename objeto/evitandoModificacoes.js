const produto = Object.preventExtensions({ //previne de adicionar novos atributos, mas consegue excluir e modificaros valores dentro dele
    nome: "Qualquer", preco: 1.99, tag: 'aaa'
})

console.log('Externsível: ', Object.isExtensible(produto))

produto.nome = "aaaa"
produto.descricao = 'asçdofjasldfhaslkdfhads' //não vai ser adicionado no objeto
delete produto.tag
console.log(produto)

/////////////////////////////////////////////////
const pessoa = {nome: 'Joao', idade: 35}
Object.seal(pessoa) //não consegue adicionar nem excluir atributos, mas pode modificar os valores ainda
console.log('Selado: ', Object.isSealed(pessoa))
pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)

// O Object.freeze não deixa fazer nada, nenhuma das operações