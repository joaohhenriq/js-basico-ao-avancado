// no browser, não reconhece o this, aí quando chama a função, dá undefined
class Pessoa {
    constructor(nome) {
        this.nome = nome
    }

    falar(){
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('João')
p1.falar()


// abaixo é uma factory, e não precisamos usar o this
const pessoa = nome => {
    return {
        falar: _ => console.log(`Meu nome é ${nome}`)
    }
}

const p2 = pessoa('João')
p2.falar()