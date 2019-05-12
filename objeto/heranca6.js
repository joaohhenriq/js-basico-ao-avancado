function Aula(nome, videoID) {
    this.nome = nome
    this.videoID = videoID
}

const aula1 = new Aula("Bem vindo", 123)
const aula2 = new Aula("Até mais", 456)
console.log(aula1, aula2)

//O operado new cria um objeto a partir da função, e associa tb o prototype para este objeto (herança)

//simulando o new
function novo(f, ...params){ // f é a função
    const obj = {} //cria o objeto vazio
    obj.__proto__ = f.prototype //associa o prototype do novo objeto com o que veio no parametro
    f.apply(obj, params) //executa a função f, passando como objeto de contexto o obj e passando os parametros
    //recebidos. Notando que ...params é um array, mas como o segundo parametro do apply requisita um
    //array, passa o mesmo diretamente

    return obj
}

const aula3 = novo(Aula, "Hahahaha", 1111)
const aula4 = novo(Aula, "Hihihihi", 2222)
console.log(aula3,aula4)