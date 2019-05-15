const pessoas = [
    {
        nome: 'aaa',
        idade: 12
    },
    {
        nome: 'bbb',
        idade: 23
    },
    {
        nome: 'ccc',
        idade: 33
    },
    {
        nome: 'ddd',
        idade: 56
    },
    {
        nome: 'eee',
        idade: 10
    },
    {
        nome: 'fff',
        idade: 15
    },
    {
        nome: 'ggg',
        idade: 37
    },
    {
        nome: 'hhh',
        idade: 2
    },
    {
        nome: 'iii',
        idade: 54
    },
]

console.log(pessoas.reduce(function(acumulador, valorAtual){
    const maiorOuMenor = valorAtual.idade >= 18 ? 'maiores' : 'menores'

    acumulador[maiorOuMenor].push(valorAtual)

    return acumulador
}, {maiores: [], menores: []}))

