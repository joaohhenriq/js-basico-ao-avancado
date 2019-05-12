const obj = {a: 1, b: 2, c: 3, soma(){return a + b + c}}
console.log(JSON.stringify(obj)) //função não aparece nos jsons, apenas os dados trafegados

// console.log(JSON.parse("{a: 1, b: 2, c: 3}")) errado
console.log(JSON.parse('{"a": 1, "b": 2, "c": 3}'))
console.log(JSON.parse('{"a": 1, "b": "sadfsdaf", "c": true, "e": [1, 2, 3]}'))