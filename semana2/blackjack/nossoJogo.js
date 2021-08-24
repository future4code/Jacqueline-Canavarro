/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

console.log ("Boas vindas ao jogo Blackjack!")

let comecarRodada = confirm("Quer iniciar uma nova rodada?")
if (comecarRodada) {
   // console.log ("Vamos iniciar a rodada!")
   let cartaUsuario = comprarCarta()
   let cartaUsuario2 = comprarCarta()
   let cartaPc = comprarCarta()
   let cartaPc2 = comprarCarta()
   
   let quantidadeDePontosUsuario = cartaUsuario.valor + cartaUsuario2.valor
   let quantidadeDePontosPc = cartaPc.valor + cartaPc2.valor

   console.log (`Computador 1 - cartas: ${cartaPc.texto}, pontuação: ${cartaPc.valor}. Computador 2 - cartas: ${cartaPc2.texto}, pontuação ${cartaPc2.valor}`)
   console.log (`Usuário 1 - cartas: ${cartaUsuario.texto}, pontuação: ${cartaUsuario.valor}. Usuário 2 - cartas: ${cartaUsuario2.texto}, pontuação ${cartaUsuario2.valor}`)

   if (quantidadeDePontosUsuario > quantidadeDePontosPc){
      console.log ("O usuário ganhou")
   } else if (quantidadeDePontosPc > quantidadeDePontosUsuario) {
   console.log("O pc ganhou!")
   } else if (quantidadeDePontosUsuario === quantidadeDePontosPc)
   console.log ("Houve um empate!")


 } else {
      console.log ("O jogo acabou!")
   }


