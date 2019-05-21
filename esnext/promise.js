function falarDepoisDe(segundos, frase){    
    //função que recebe dois parâmetros e retorna uma promessa 
    return new Promise((resolve, reject) => { //resolve é um parâmetro chamado quando a promessa for atendida
        setTimeout(() => {
            resolve(frase)
        }, segundos * 1000);
    })
}

falarDepoisDe(3, 'Que legal')
    .then(frase => frase.concat('!!??'))
    // .then((frase, abc) => frase.concat('!!??')) resolve só aceita um parâmetro apenas. Sequiser passar mais coisas, passa um objeto
    .then(outraFrase => console.log(outraFrase))
    .catch(e = console.log(e)) // se na função acima passar reject no lugar de resolve, é tratado no catch
                               // se nessa situação não tiver um catch, vai dar erro de execução