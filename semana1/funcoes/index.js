// // ----> EXERCÍCIO DE INTERPRETAÇÃO DE CÓDIGO

// // 1)
// // function minhaFuncao(variavel) {
// // 	return variavel * 5
// // }

// // console.log(minhaFuncao(2))
// // console.log(minhaFuncao(10))
// // ```

// // a) O que vai ser impresso no console?
// // 10
// // 50

// // b) O que aconteceria se no VSCode retirássemos os dois `console.log` e simplesmente invocássemos a função `minhaFuncao(2)` e `minhaFuncao(10)`? O que apareceria no console?
// // Não apareceria nada no console.

// // 2) Leia o código abaixo:

// // let textoDoUsuario = prompt("Insira um texto");

// // const outraFuncao = function(texto) {
// // 	return texto.toLowerCase().includes("cenoura")
// // }

// // const resposta = outraFuncao(textoDoUsuario)
// // console.log(resposta)
// // ```

// // a. Explique o que essa função faz e qual é sua utilidade

// // Essa função vai colocar o texto que o usuário digitou no prompt em letras minúsculas e procurar a palavra cenoura, em letras minusculas, como está nas aspas, devolvendo true ou false caso elas estejam ou não no texto digitado pelo usuário.

// // b. Determine qual será a saída no console para cada uma das 3 entradas do usuário:
// //      i.   `Eu gosto de cenoura` - eu gosto de cenoura - true
// //      ii.  `CENOURA é bom pra vista` - cenoura é bom pra vista - true
// //      iii. `Cenouras crescem na terra` - cenouras crescem na terra - false

// // ----> EXERCÍCIO DE ESCRITA DE CÓDIGO

// // 1) Escreva as funções aplicadas abaixo:

// // a) A função não deve receber nenhum parâmetro
// // e deve imprimir uma mensagem falando algumas informações sobre você, como:
// // "Eu sou Caio, tenho 23 anos, moro em São Paulo e sou estudante.

// // function imprimirSobreMim(){
// //     console.log("Eu sou Jacqueline, tenho 32 anos, moro em Recife e sou publicitária")
// // }
// // console.log(imprimirSobreMim())

// // b) Agora escreva uma função que receba 4 parâmetros que correspondem às informações de uma pessoa: o nome (`string`), a idade (`number`), a cidade (`string`) e uma profissão (`string`). Ela deve retornar uma `string` que unifique todas as informações da pessoa em uma só mensagem com o template:

// // Eu sou [NOME], tenho [IDADE] anos, moro em [ENDEREÇO] e sou [PROFISSÃO].

// // function dados (nome,idade,endereço,profissao){
// //     const meusDados = (`Eu sou ${nome}, tenho ${idade} anos, moro em ${endereço} e sou ${profissao}`)
// //     console.log(meusDados)
// // }

// // dados ("Jacqueline", 32, "Recife", "Publicitária")

// // 2) Escreva as funções abaixo

// // a) Escreva uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas entradas e retorne o resultado. Invoque a função e imprima no console o resultado.

// // function comDoisNumeros (n1, n2) {
// // const soma = 20 + 22
// // return soma
// // }
// // console.log(comDoisNumeros())


// // b) Faça uma função que recebe 2 números e retorne um booleano que informa se o primeiro número é **maior ou igual** ao segundo.

// // function twonumber (n1, n2) {
// // const booleano = 40>=20
// // return booleano
// // }
// // console.log(twonumber())

// // c) Escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não

// // let numeroUsuario = Number(prompt("Digite um número aqui"))
// // function parOuNao (n1) {
// //     const booleano = numeroUsuario / 2 % 2 === 0
// //     return booleano 
// // }
// // console.log(parOuNao())

// // d) Faça uma função que recebe uma mensagem (`string`) como parâmetro e imprima o tamanho dessa mensagem, juntamente com uma versão dela em letras maiúsculas.

// function recebeUmaMensagem (mensagem){
//     // mensagem = "Olha a msg chegando".toUpperCase()
//     return mensagem
// }
// console.log (recebeUmaMensagem())