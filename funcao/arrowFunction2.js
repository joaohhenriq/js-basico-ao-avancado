function Pessoa(){
    this.idade = 0

    setInterval(() => {
        this.idade++
        console.log(this.idade)
    }, 1000) //usando arrow function, trava o this automatico, e não dá mais o problema
}

new Pessoa