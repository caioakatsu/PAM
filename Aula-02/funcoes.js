
//Criando primeira função
function mensagem () {
    return "Hello world"
}
//Console.log vai executar a função mensagem
console.log(mensagem())

// () => é uma forma alternativa de criar uma função
const nome = () => {
    return "Caio"
}

console.log(nome())

//O parâmetro versiculo vai esperar uma atribuição
function PalavraDeDeus(versiculo) {
    return console.log(versiculo)
}

//Atribuindo valores ao parâmetro
PalavraDeDeus("Pai nosso")
PalavraDeDeus("Que estais no céu")
PalavraDeDeus("Santificado seja o vosso nome")