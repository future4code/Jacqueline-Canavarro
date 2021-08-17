// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// // EXERCÍCIO 0A
// function soma(num1, num2) {
//   // implemente sua lógica aqui
//   return num1 + num2
// }

// // EXERCÍCIO 0B
// function imprimeMensagem() {
//   // implemente sua lógica aqui
//   const mensagem = prompt('Digite uma mensagem!')

//   console.log(mensagem)
// }

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo(largura, altura) {
  // implemente sua lógica aqui
      return 5 * 3
}
console.log(calculaAreaRetangulo())

// EXERCÍCIO 02
function imprimeIdade(anoAtual, anoDeNascimento) {
  // implemente sua lógica aqui
      return 2021 - 1989
}
console.log(imprimeIdade())

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
      return (85 / 3.24)
}
console.log (calculaIMC())

// EXERCÍCIO 04
function imprimeInformacoesUsuario(nome, idade, email) {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
    const nome1= "Jacqueline"
    const idade1 = "32"
    const email1 = "canavarrojacqueline@gmail.com" 
    return `Meu nome é ${nome1}, tenho ${idade1} anos, e o meu email é ${email1}`
}
    console.log(imprimeInformacoesUsuario())

// EXERCÍCIO 05
function imprimeTresCoresFavoritas(corFav1, corFav2, corFav3) {
  // implemente sua lógica aqui
    const corFav1r = "Lilás"
    const corFav2r = "Preto"
    const corFav3r = "Amarelo"
    return ` Minhas 3 cores favoritas são: ${corFav1r}, ${corFav2r} e ${corFav3r}`
}
console.log (imprimeTresCoresFavoritas())

// EXERCÍCIO 06
function retornaStringEmMaiuscula(palavra) {
  // implemente sua lógica aqui
  const palavra1= "manuella"
return palavra1.toUpperCase() 
}
console.log(retornaStringEmMaiuscula())

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
return 3000 / 100
}
console.log(calculaIngressosEspetaculo())

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
 const string1Valor = "Manuella"
 const string2Valor = "Antonio"
return string1Valor.length === string2Valor.length
}
console.log (checaStringsMesmoTamanho())

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
const lista = ["banana", "maçã","abacaxi","laranja"]
return lista[0]
}
console.log(retornaPrimeiroElemento())

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  const listaDois = ["banana", "maçã","abacaxi","laranja"]
  const listaDoisQtd = listaDois.lenght - 1
  return listaDois[3]
}
console.log (retornaUltimoElemento())

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
const listaTres = ["1", "2", "3"]
listaTres.push("1")
listaTres.splice(2, 1)
listaTres.unshift("3")
listaTres.splice(1, 1)
return listaTres
}
console.log(trocaPrimeiroEUltimo())

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
const string1R = "Manuella"
const string2R = "Antônio"
const resultado = typeof string1R === typeof string2R
return resultado
}
console.log(checaIgualdadeDesconsiderandoCase())

// EXERCÍCIO 13
function checaRenovacaoRG(anoAtual2, anoDeNascimento2, idadeAtual) {
  // implemente sua lógica aqui
const anoAtual2R = 2021
const anoDeNascimento2R = 2010
const idadeAtualR = anoAtual2R - anoDeNascimento2R
const resultado = idadeAtualR === 15
return resultado
}
console.log(checaRenovacaoRG())

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
let anoR = 2021
const bissexto = anoR % 4 === 0 
return bissexto
}
console.log(checaAnoBissexto())

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu(maisDeDezoitoAnos, eMCompleto, disponibilidadeDeHorario) {
  // implemente sua lógica aqui
  const anoDeNasc = 1989
  const anoAtual3 = 2021
  const resultado = anoAtual3 - anoDeNasc 
  const maisDeDezoitoAnosR = resultado >= 18

  const eMCompletoR = "sim" === "sim"
  const horariosR = "sim" === "sim"
  return maisDeDezoitoAnosR, eMCompletoR, horariosR

}

console.log (checaValidadeInscricaoLabenu())