const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

axios.get(url).then(response => {
    const funcionarios = response.data
    // console.log(funcionarios)

    //a mulher chinesa com o menor salário
    const resultado = funcionarios
        .filter(f => f.genero == 'F')
        .filter(f => f.pais == 'China')
        .reduce((acumulador, valorAtual) => {
            return acumulador.salario > valorAtual.salario
                ? valorAtual
                : acumulador
        })

        // .reduce(function(acumulador, valorAtual){
        //     acumulador = acumulador.salario > valorAtual.salario
        //         ? valorAtual
        //         : acumulador

        //     return acumulador
        // })
    console.log(resultado)
})