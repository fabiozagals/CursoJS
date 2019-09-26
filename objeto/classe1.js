class Lacamento {
    constructor(nome = 'Genérico', valor = 0) {
        this.nome = nome
        this.valor = valor
    }
}

class CicloFinanceiro {
    constructor(mes, ano)  {
        this.mes = mes
        this.ano = ano
        this.lacamentos = []
    }

    addLancamentos(...lacamentos) {
        lacamentos.forEach(l => this.lacamentos.push(l))
    }

    sumario() {
        let valorConsolidade = 0
        this.lacamentos.forEach(l => {
            valorConsolidade += l.valor
        })
        return valorConsolidade
    }
}

const salario = new Lacamento('Salário', 45000)
const contaDeLuz = new Lacamento('luz', -220)

const contas = new CicloFinanceiro(6, 2019)
contas.addLancamentos(salario, contaDeLuz)
console.log(contas.sumario())