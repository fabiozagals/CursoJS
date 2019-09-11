// par nome/valor
const saudacao = 'Opa' // contexto léxico 1

function exec(){
    const saudacao = 'Falaaa' // contexto léxico 2
    return saudacao
}

// Objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Fábio',
    idade: 31,
    peso: 80,
    endereco:{
        logradouto: 'Rua Acácio Costa Junior',
        numero: 711
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)