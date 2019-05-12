const pessoa = {
    nome: 'Joao',
    idade: 23,
    peso: 83
}

console.log(Object.keys(pessoa)) // pega as chaves
console.log(Object.values(pessoa)) // pega os valores das chaves
console.log(Object.entries(pessoa)) // lista das chaves e valores

//percorrendo o array do último console
Object.entries(pessoa).forEach(e => {
    console.log(`${e[0]}: ${e[1]}`)
})

//podemos fazer a mesma operação acima usando o destructuring, em vez de pegar o elemento
// seria melhor por exemplo quando o elemento do array tem muitos itens, e queremos apenas
// alguns valores do mesmo
Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})
//----------------------------------------------------

//define caracteristicas das propriedades do objeto,
//por exemplo, a propriedade pode ou não ser alterada, ou pode ser visivel ou não em algum momento...
Object.defineProperty(pessoa, 'dataNascimento', { //obejto target, nome da nova propriedade, caracteristica da propriedade
    enumerable: true, //mostra na lista de keys, quando chama o .keys, se tiver false, não mostra
    writable: false,
    value: '01/01/2019'
})

pessoa.dataNascimento = '01/01/2020'
console.log(pessoa.dataNascimento) //como o atributo não pode ser editado, dá um freezing nele
//não altera o valor, mantém o original, e não dá erros no console

// ---------------------------------------------------

const dest = {a: 1}
const o1 = {b: 2}
const o2 = {c: 3, a: 4}
const newObj = Object.assign(dest, o1, o2)
// O assign concatena os objetos
// O primeiro objeto é o que vai receber os próximos objetos,
// por exemplo, dest vai receber o valor de o1, no caso o valor b,
// e entao vai receber o valor de o2, o valor c. Como o valor a já existe no dest,
// mantém o valor a e sobrescreve seu valor com 4, pega o último valor passado para o atributo
console.log(newObj) // { a: 4, b: 2, c: 3 }

Object.freeze(newObj) // congela os valores do objeto, não deixa nada alterar
newObj.c = 1234 // não consegue atribuir este valor, mantém o valor original
console.log(newObj)