// Arrow Function
const soma = (a, b) => a + b
console.log(soma(1, 5))

// Arrow Function (this)
const lexicol1 = () => console.log(this === exports)
const lexicol2 = lexicol1.bind({})
lexicol1()
lexicol2()

// parametro default
function log(texto = 'Node') {
  console.log(texto)
}
log()
log('Sou mais forte')

// operador rest
function total(...numeros) {
  let total = 0
  numeros.forEach(n => total += n)
  return total
}
console.log(total(2, 3, 4, 5))
