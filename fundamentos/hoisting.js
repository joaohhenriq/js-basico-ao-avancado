console.log('a = ', a)
var a = 2
console.log('a = ', a)

// o código acima pode ser interpretado como abaixo. Se fosse em java, dava pau
// var a
// console.log('a = ', a)
// a = 2
// console.log('a = ', a)

//com let, esse efeito de hoisting não funciona, vai dar erro, igual no java
console.log('a = ', a)
let a = 2
console.log('a = ', a)