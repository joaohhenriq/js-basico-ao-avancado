function Pessoa(){

    //duas formas de travar o valor do this

    this.idade = 0

    const self = this

    setInterval(function(){
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/, 1000) // pode fazer o bind aqui, pro set interval reconhecer o this, 
                            // ou usar o self
}

new Pessoa