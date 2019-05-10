function area(larg, alt){
    const area = larg * alt
    if (area > 20){
        console.log(`Valor acima do permitido: ${area}m²`)
    } else {
        return area
    }
} // pode retornar ou não um valor

console.log(area(2,2))
console.log(area(2))
console.log(area())
console.log(area(2,3, 45, 5, 66))