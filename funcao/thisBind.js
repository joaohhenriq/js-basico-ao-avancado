const pessoa = {
    saudacao: 'Bom dia',
    falar(){
        console.log(this.saudacao)
    }
} 

pessoa.falar()
const falar = pessoa.falar
falar()// não dá certo, mostra como resultado undefined, por não reconhece o this dentro da function

const falarDePessoa = pessoa.falar.bind(pessoa) //resolve o this como pessoa
falarDePessoa()