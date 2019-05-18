const contadorA = require('./instanciaUnica') // pelo cache, é como se mantivesse um singleton
const contadorB = require('./instanciaUnica') // pelo cache, é como se mantivesse um singleton

const contadorC = require('./instanciaNova')() // já invoca a função, cria um novo objeto
const contadorD = require('./instanciaNova')() // já invoca a função, cria um novo objeto

contadorA.inc()
contadorA.inc()
console.log(contadorB.valor) //inclui o valor de A, mas altera no de B também

contadorC.inc()
contadorC.inc()
console.log(contadorD.valor)//por criar objeto novo em C, não mexe em D