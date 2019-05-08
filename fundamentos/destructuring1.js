const pessoa = {
    nome: 'Joao',
    idade: 5,
    endereco: {
        rua: 'rua da ostra',
        cep: 74000
    }
}

//aplicando o destructuring
const {nome, idade} = pessoa //retira os atributos do objeto pessoa
console.log(nome, idade)
 
const {nome: n, idade: i} = pessoa //retira os atributos do objeto pessoa
console.log(n, i)

// se passar o nome do atributo errado, por exemplo, "pessoas", vai dar como resultado undefined
// mas podemos colocar um valor, pra se não houver o atributo, utilizar o valor default

const {nome: no, sobrenome = 'camargo'} = pessoa 
console.log(no, sobrenome)

const {endereco: {rua, cep}} = pessoa //extrai somente rua e cep, endereco não é extraído
console.log(rua, cep)