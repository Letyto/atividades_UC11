let prompt = require('prompt-sync')()

let dataHoje = new Date()
let dataEvento = new Date( prompt("Digite a data do evento:"));

if (dataEvento > dataHoje) {
    console.log("Cadastro permitido.")
} else {
    console.log("Cadastro negado, data invalida. a data do evento deve ser superior a ", dataHoje)
}