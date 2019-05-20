// Usar spread com objeto
const funcionario = {nome: 'Maria', salario: 12000}
const clone = {ativo: true, ...funcionario}
console.log(clone) // { ativo: true, nome: 'Maria', salario: 12000 }

// Usar spread com array
const grupoA = ['João', 'Pedro', 'Gloria']
const grupoFinal = ['Maria',...grupoA, 'Rafaela']
console.log(grupoFinal) // [ 'Maria', 'João', 'Pedro', 'Gloria', 'Rafaela' ]