let dobro = function(a){
    return 2 * a
}

dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a
console.log(dobro(2))

// função sem parâmtro
let ola = function(){
    return 'Olá'
}

ola = () => 'Olá'
ola = _ => 'Olá'
console.log(ola())