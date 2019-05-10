//cria de forma literal
function fun1() { }

//armazena em variável
const fun2 = function () {}

//armazena em array
const array = [function(a, b) {return a +b}, fun1, fun2 ]
console.log(array[0](2,3))

//armazenar em atributo de objeto
const obj = {}
obj.falar = function() {return 'Opa'}
console.log(obj.falar())

// passar função como parametro
function run(fun){
    fun()
}

run(function () {
    console.log('Executando...')
})

// uma função pode retornar/conter uma função
function soma(a,b){
    return function (c){
        console.log(a+b+c)
    }
}

soma(2,3)(4)
const cincoMais = soma(2,3)
cincoMais(4)