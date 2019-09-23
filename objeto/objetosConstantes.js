
// pessoa -> 132 -> {...}
const pessoa = { nome : 'João' }
pessoa.nome = 'Pedro'
console.log(pessoa)

// pessoa <- 456 -> {...}
//pessoa = { nome: 'Ana' }

// congela o objeto
Object.freeze(pessoa)

pessoa.nome = 'Maria'
pessoa.endereco = 'Rua ABC'
delete pessoa.nome
console.log(pessoa)

const pessoaConstante = Object.freeze({ nome : 'Joao' })
pessoaConstante.nome = 'Maria'
console.log(pessoaConstante)