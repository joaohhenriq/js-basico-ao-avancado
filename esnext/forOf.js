//agora em vez de percorrer os índices, podemos percorrer elementos também 


for (let letras of "Coder") {
    console.log(letras)
}

const assuntosEcma = ['Map', 'Set', 'Promise']

//percorre em cima do indice
for (let i in assuntosEcma) {
    console.log(i)
}

//percorre em cima dos valores
for (let assuntos of assuntosEcma) {
    console.log(assuntos)
}

const assuntosMap = new Map([
    ['Map', { abordado: true }],
    ['Set', { abordado: true }],
    ['Promise', { abordado: false }],
])

for (let assunto of assuntosMap) {
    console.log(assunto)
}

for (let chave of assuntosMap.keys()) {
    console.log(chave)
}

for (let valor of assuntosMap.values()) {
    console.log(valor)
}

for (let [ch, vl] of assuntosMap.entries()) {
    console.log(ch, vl)
}

const s = new Set(['a', 'b', 'c'])
for(let letra of s) {
    console.log(letra)
}