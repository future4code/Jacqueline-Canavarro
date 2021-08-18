// // // INTERPRETAÇÃO DE CÓDIGO

// // 1) Leia o código abaixo:

// // const filme = {
// // 	nome: "Auto da Compadecida", 
// // 	ano: 2000, 
// // 	elenco: [
// // 		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
// // 		"Virginia Cavendish"
// // 		], 
// // 	transmissoesHoje: [
// // 		{canal: "Telecine", horario: "21h"}, 
// // 		{canal: "Canal Brasil", horario: "19h"}, 
// // 		{canal: "Globo", horario: "14h"}
// // 		]
// // }

// // console.log(filme.elenco[0])
// // console.log(filme.elenco[filme.elenco.length - 1])
// // console.log(filme.transmissoesHoje[2])

// // a) O que vai ser impresso no console?
// // 1 - Matheus Nachtergaele
// // 2 - Denise Fraga 
// // 3 - canal: Globo horario: 14h

// // 2) Leia o código abaixo:

// const cachorro = {
// 	nome: "Juca", 
// 	idade: 3, 
// 	raca: "SRD"
// }

// const gato = {...cachorro, nome: "Juba"}

// const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

// console.log(cachorro)
// console.log(gato)
// console.log(tartaruga)

// a) o que vai ser impresso no console?
// 1 - nome: Juca
//     idade: 3
//     raca: SRD
// 2 - nome: Juba
//     idade: 3
//     raca: SRD
// 3 - nome: Jubo
//     idade: 3
//     raca: SRD  

// b) O que faz a sintaxe dos três pontos antes do nome de um objeto?
// Ela retorna as informações do objeto anterior e após isso você pode incluir o que precisar dentro daquelas informações que estão ali armazenadas

// 3) Leia o código abaixo:

// function minhaFuncao(objeto, propriedade) {
// 	return objeto[propriedade]
// }

// const pessoa = {
//   nome: "Caio", 
//   idade: 23, 
//   backender: false
// }

// console.log(minhaFuncao(pessoa, "backender"))
// console.log(minhaFuncao(pessoa, "altura"))

// a) O que vai ser impresso no console?
// O "false" referente ao beckender e undefined.

// b) Explique o valor impresso no console. Você sabe por que isso aconteceu?
// Isso aconteceu porque foi criado um objeto fora da função. Então o console leu o resultado do objeto mas não conseguiu ler o resultado da função porque os valores dela não foram definidos.

// EXERCÍCIO DE ESCRITA DE CÓDIGO

// 1) Resolva os passos a seguir:

// a) Crie um objeto. Ele deve conter duas propriedades: nome (string) e apelidos (um array que sempre terá exatamente três apelidos). Depois, escreva uma função que recebe como entrada um objeto e imprime uma mensagem no modelo abaixo: 

// Exemplo de entrada
// const pessoa = {
//     nome: "Amanda", 
//     apelidos: ["Amandinha", "Mandinha", "Mandi"]
//  }
 
//  // Exemplo de saída
//  "Eu sou Amanda, mas pode me chamar de: Amandinha, Mandinha ou Mandi"

// const pessoa = {
//     nome: "Jacqueline",
//     apelidos: ["Jac", "Line", "Jack"]
// }
// function boraVer(pessoa){
//     const frase = `Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos[0]}, ${pessoa.apelidos[1]}, ${pessoa.apelidos[2]}`
//     return frase
// }
// console.log(boraVer(pessoa))

// b) Agora, usando o operador spread, crie um novo objeto mantendo o valor da propriedade nome, mas com uma nova lista de três apelidos. Depois, chame a função feita no item anterior passando como argumento o novo objeto

// const pessoa = {
//         nome: "Jacqueline",
//         apelidos: ["Jac", "Line", "Jack"]
// }
// const apelido1 = {...pessoa, apelidos: ["J", "C", "M"]}

// function boraVer (pessoa){
//     const frase1 = `Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos[0]}, ${pessoa.apelidos[1]}, ${pessoa.apelidos[2]}`
//     return frase1 
// }
// console.log(boraVer(apelido1))

// 2) Resolva os passos a seguir:

// a) Crie dois objetos diferentes com as seguintes propriedades: nome, idade e profissão. 

// const objeto1 ={
//     nome: "Jacqueline",
//     idade: 32,
//     profissão: "Publicitária"
// }
// const objeto2 ={
//     nome: "Manuella",
//     idade: 27,
//     profissão: "Enfermeira"
// }

// b) Escreva uma função que receba esses objetos e retorne um array com as seguintes informações:

// 1. O valor de `nome`
// 2. O numero de caracteres do valor `nome`
// 3. O valor de `idade`
// 4. O valor de `profissão`
// 5. O numero de caracteres do valor `profissão`
// - Exemplo

// const pessoa = {
// 	nome: "Bruno", 
//  idade: 23, 
//  profissao: "Instrutor"
//   }
  
//   minhaFuncao(pessoa)
  
//   Retorno: ["Bruno", 5, 23, "Instrutor", 9]

// function boraVer (objeto1) {
//     const array1 = [[objeto1.nome],[objeto1.nome.length],[objeto1.idade],[objeto1.profissão],[objeto1.profissão.length]]
// return array1
// }
// console.log(boraVer(objeto1))

// 3) Resolva os passos a seguir:

// a) Crie uma variável de escopo global que guarde um `array` vazio chamada `carrinho`
const carrinho = []
// b) Crie três novos objetos que representem frutas de um sacolão. Eles devem ter as seguintes propriedades: nome (string) e disponibilidade (boolean - devem começar como true)
sacolao1 = {
    nome: "Melancia", disponibilidade: true
}
sacolao2 ={
    nome: "Morango", disponibilidade: false
}
sacolao3 ={
    nome: "Uva", disponibilidade: true
}   
// c) Crie uma função que receba um objeto fruta por parâmetro e coloque-a dentro do array de carrinho. Invoque essa função passando os três objetos criados. 

function boraVer (sacolao1, sacolao2, sacolao3) {
    const carrinhoCheio = [sacolao1, sacolao2, sacolao3]
return carrinhoCheio
}
console.log (boraVer(sacolao1,sacolao2,sacolao3))
