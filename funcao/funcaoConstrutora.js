function Carro(velocidadeMaxima = 200, delta = 5){
    //atributo privado
    let velocidadeAtual = 0

    // método público
    this.acelerar = function(){
        if(velocidadeAtual + delta <= velocidadeMaxima){
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }

    // método público
    this.getVelocidadeAtual = function (){
        return velocidadeAtual
    }

    //this é o responsável por tornar algo visivel na função
}

const uno = new Carro
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro(350, 20)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())

console.log(typeof Carro) // Função
console.log(typeof ferrari) // Objeto