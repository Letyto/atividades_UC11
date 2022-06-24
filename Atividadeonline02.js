let prompt = require('prompt-sync')()
//cadastro da Data
let dataHoje = new Date()
let dataEvento = new Date( prompt("Digite a data do evento:"));

if (dataEvento > dataHoje) {
    console.log("Cadastro permitido.")
} else {
    console.log("Cadastro negado, data invalida. A data do evento deve ser superior a ", dataHoje)
    process.exit()
}

// Cadastro da Idade

  let usuarioIdade = prompt("Insira sua idade: ")

  if (usuarioIdade >= 18) {
      console.log("Cadastro permitido.")
  } else {
      console.log("Cadastro negado, idade insuficiente.")
      process.exit() 
  }

//   Cadastro da quantidade de participante

 let numeroParticipante = prompt("Insira a quantidade de participantes: ")
  if (numeroParticipante < 100) {
     console.log("Cadastro permitido.")
  } else {
     console.log("Cadastro negado, limite excedido.")
     process.exit()
  }

console.log("Fim do codigo")