// ACUMULADOR E ELEMENTO ATUAL

const alunos = [
    {nome: 'aaa', nota: 7.3, bolsista: false},
    {nome: 'bbb', nota: 9.2, bolsista: true},
    {nome: 'ccc', nota: 9.8, bolsista: false},
    {nome: 'ddd', nota: 8.7, bolsista: true},
]

const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual){
    console.log(acumulador, atual)
    return acumulador + atual
})

console.log(resultado)

// MAP TRANSFORMA UM ARRAY EM OUTRO
// FILTER TIRA OS ELEMENTOS DE UM ARRAY
