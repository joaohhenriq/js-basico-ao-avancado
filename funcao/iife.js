//IIFE = Immediately Invoked Function Expression

//Cria uma função na hora e já chama a execução dela (com os parênteses no final
//Serve para fugir do escopo global e não alterar nada dele, cria na hora, executa, e não interfere no de fora

(function(){
    console.log('Será executado na hora!')
    console.log('Foge do escopo mais abrangente!')
})()