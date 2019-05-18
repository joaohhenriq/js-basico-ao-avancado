//Uma factory retorna um novo objeto

//Recebe uma função, que quando instanciada vira um objeto
module.exports = () => {
    return {
        valor: 1,
        inc(){
            this.valor++
        }
    }
}