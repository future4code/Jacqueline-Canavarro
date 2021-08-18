// EXERCÍCIO DE INTERPRETAÇÃO DE CÓDIGO

// 1) O que o código abaixo está fazendo? Qual o resultado impresso no console?

// let valor = 0
// for(let i = 0; i < 5; i++) {
//     valor += i
//   }
//   console.log(valor)

// Resposta: O laço vai finalizar quando fizer o looping 4x. Pois 4<5. O resultado impresso no console será 10.
// 10

// 2) Leia o código abaixo:

// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// for (let numero of lista) {
//     if (numero > 18) {
//           console.log(numero)
//       }
//   }

// a) O que vai ser impresso no console?

// Resposta: os números maiores do que 18. Neste caso: 19, 21, 23, 25, 27 e 30

// b) Se eu quisesse acessar o índice de cada elemento dessa lista, o for...of... é suficiente? Se sim, o que poderia ser usado para fazer isso?
// sim. Poderia usar for (let i = 0; i < 11; i++)
//                        const elemento = lista[i]
//                        console.log(elemento)

// c) Qual seria o resultado impresso no console, se o usuário digitasse o número 4 ?

// const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
// let quantidadeAtual = 0
// while(quantidadeAtual < quantidadeTotal){
//   let linha = ""
//   for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
//     linha += "*"
//   }
//   console.log(linha)
//   quantidadeAtual++
// }

// Resposta: 
// *
// **
// ***
// ****

// EXERCÍCIO DE ESCRITA DE CÓDIGO

// 1) Pergunte ao usuário quantos bichinhos de estimação ele tem e guarde esse dado em uma variável. 

// a) Se a quantidade for 0, imprima no console "Que pena! Você pode adotar um pet!"
// b) Se a quantidade for maior que 0, solicite que o usuário digite os nomes deles, um por um, e guarde esses nomes em um array
// c) Por fim, imprima o array com os nomes dos bichinhos no console

// const quantidadeDePets = Number(prompt("Quantos pets você tem?")) 
// if (quantidadeDePets === 0) {
//     console.log ("Que pena! Você pode adotar um pet!")
// }

// if (quantidadeDePets > 0){
//     let arrPets = []
//     for (let i = 0; i < quantidadeDePets; i++) {
//         arrPets.push(prompt("Diga o nome de cada um deles"))
//     }
//     console.log(arrPets)
// }

// 2) Considere que você tenha acesso a um array  (chamado de 'array original') que é composto somente de números. Baseando-se nisso, crie uma função para cada um dos itens abaixo, realizando as operações pedidas:

// a) Escreva um programa que imprime cada um dos valores do array original.
// const arrayOriginal = [10,40,85,68,72,100]
// function imprimirValorArrayOriginal (arrayOriginal) {
//     for(let valor of arrayOriginal){
//         console.log(valor) 
//     } 
// }
// console.log(imprimirValorArrayOriginal(arrayOriginal))

// b) Escreva um programa que imprime cada um dos valores do array original divididos por 10
// const arrayOriginal = [10,40,85,68,72,100]
// function imprimirValorArrayOriginal (arrayOriginal) {
//     for (let valor of arrayOriginal){
//         console.log(valor / 10)
//     }
// }
// imprimirValorArrayOriginal(arrayOriginal)

// c) Escreva um programa que crie um novo array contendo, somente, os números pares do array original e imprima esse novo array
// const arrayOriginal = [10,40,85,68,72,100]
// function imprimirValorParArrayOriginal (arrayOriginal) {
//     for (let valor of arrayOriginal){
//         if (valor % 2 === 0)
//         console.log(valor)
//     }
// }
// imprimirValorParArrayOriginal(arrayOriginal)

// d) Escreva um programa que crie um novo array contendo strings, da seguinte forma: "O elemento do índex i é: numero". Depois, imprima este novo array.
// const novoArrayStrings = ["O elemento do index 0 é: 22", "O elemento do index 1 é: 33", "O elemento do index 2 é 44", "O elemento do index 3 é: 55", "O elemento do index 4 é: 66"]

// function imprimirNovoArrayStrings (novoArrayStrings) {
//     for(let nomes of novoArrayStrings){
//         console.log(nomes)
//     }
// }
// imprimirNovoArrayStrings(novoArrayStrings)

// e) Escreva um programa que imprima no console o maior e o menor números contidos no array original
// const arrayOriginal = [10,40,85,68,72,100]
// function imprimirMaiorNumeroDaArrayOriginal (arrayOriginal) {
//         for (let maiorValor of arrayOriginal){
//             if (maiorValor === 100)
//             console.log("O maior valor é 100")
//     }
// }
// function imprimirMenorNumeroDaArrayOriginal (arrayOriginal){
//     for (let menorValor of arrayOriginal){
//         if (menorValor === 10)
//         console.log("O menor valor é 10")
//     }
// }
// imprimirMaiorNumeroDaArrayOriginal(arrayOriginal)
// imprimirMenorNumeroDaArrayOriginal(arrayOriginal)