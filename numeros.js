const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1))
// no js, o tipo number serve tanto pra inteiro quanto flutuantes
// 1.0 pode ter ponto flutuante, mas ainda sim é inteiro

const avaliacao = 9.871
const avaliacao2= 6.871

const total = avaliacao * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2))
console.log(media.toFixed(1))
console.log(media.toString(2)) // em binário
console.log(typeof media)