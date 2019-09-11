function getInteiroAleatorio(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = -1

do {
    opcao = getInteiroAleatorio(-1, 10)
    console.log(`Opção escilhida foi ${opcao}.`)
} while (opcao != -1)
console.log('Até a próxima')