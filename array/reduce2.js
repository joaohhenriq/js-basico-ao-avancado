
const alunos = [
    {nome: 'aaa', nota: 7.3, bolsista: false},
    {nome: 'bbb', nota: 9.2, bolsista: true},
    {nome: 'ccc', nota: 9.8, bolsista: false},
    {nome: 'ddd', nota: 8.7, bolsista: true},
]

// todos os alunos são bolsistas?
console.log(alunos.map(a => a.bolsista).reduce((resultado, bolsista) => resultado && bolsista)) 

// algum aluno é bolsista?
console.log(alunos.map(a => a.bolsista).reduce((resultado, bolsista) => resultado || bolsista))

///////////////////////// pegar soma das notas
const getNota = a => a.nota
const soma = (total, atual) => total + atual
const total2 = alunos.map(getNota).reduce(soma)
console.log(total2)