//ES8: Obejet.values / Object.entries
const obj = {a: 1, b:2, c:3}
console.log(Object.values(obj)) //passa só os valores das chaves
console.log(Object.entries(obj)) //passa um array de arrays, onde cada array possui a chave e o valor

//Melhorias na notação literal
const nome = 'Carla'
const pessoa = {
    nome,
    // ola: function (){
        // return 'Oi gente'
    // }
    ola(){
        return 'Oi gente'
    }
}

console.log(pessoa.nome, pessoa.ola())

//Class
class Animal {}
class Cachorro extends Animal {
    falar(){
        return 'Au au'
    }
}

console.log(new Cachorro().falar())