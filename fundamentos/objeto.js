const prod1 = {}
prod1.nome = 'Xiaomi 9'
prod1.preco = 1900.90
prod1['Desconto Legal'] = 0.40 // evitar atributos com espaço
console.log(prod1)

const prod2 = {
    nome: 'Xiaomi 8', 
    preco: 1200.00 ,
    obj:{
        blabla: 1
    }  
}
console.log(prod2)