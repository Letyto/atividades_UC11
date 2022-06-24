 let listaAluno = ["Ana","joao","Sharon","Sandra","Julia"]
for(let numero = 0; numero < listaAluno.length; numero++) {
    //   console.log(numero)
      if (numero == 0) {
        console.log("O numero é ZERO.")
      } else if (numero % 2 == 0) {
        console.log("o numero",numero,"é par")
      } else if (numero % 2 == 1) {
        console.log("o numero", numero,"é IMPAR")
      }
}