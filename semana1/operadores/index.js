// // // EXERCICIO 1

// // // const bool1 = true 
// // // const bool2 = false
// // // const bool3 = !bool2 

// // // let resultado = bool1 && bool2
// // // console.log("a. ", resultado) // a. é falso

// // // resultado = bool1 && bool2 && bool3 
// // // console.log("b. ", resultado) // b. é falso

// // // resultado = !resultado && (bool1 || bool2) 
// // // console.log("c. ", resultado) // c. é falso 

// // // console.log("d. ", typeof resultado) d. number

// // // EXERCICIO 2

// // // let primeiroNumero = prompt("Digite um numero!")
// // // let segundoNumero = prompt("Digite outro numero!")

// // // const soma = primeiroNumero + segundoNumero

// // // console.log(soma) // Não funciona porque é necessário transformar a string em number para efetuar a soma.

// // // EXERCICIO 3

// // // let primeiroNumero = Number(prompt("Digite um número"))
// // // let segundoNumero = Number(prompt("Digite outro numero!"))

// // // const soma = primeiroNumero + segundoNumero

// // // console.log(soma)

// // // EXERCICIO 4

// // // let idade = Number(prompt("Qual é a sua idade?"))
// // // let idadeMelhorAmigo = Number(prompt("Qual é a idade do seu melhor amigo?"))

// // // let resultado = idade>idadeMelhorAmigo
// // // console.log("Sua idade é maior do que a do seu melhor amigo?", resultado)

// // // let resultado2 = idade - idadeMelhorAmigo
// // // console.log("A diferença de idade entre você e seu melhor amigo é de",resultado2,"anos")

// // // EXERCICIO 5

// // // let npar = Number(prompt("Insira aqui um número par"))
// // // console.log(npar % 2)
// // // Notei sim um padrão. Em todo número par o resto sempre é zero.
// // // Se o usuário colocar um número ímpar, o resto sempre será 1.

// // // EXERCÍCIO 6

// // // a) A idade do usuário em meses
// // // let idade = Number(prompt("Qual é a sua idade?"))
// // // console.log("Você tem", idade * 12,"meses")

// // // b) A idade do usuário em dias
// // // let idadedias = Number(prompt("Qual é a sua idade?"))
// // // console.log("Você tem", idadedias * 365, "dias")

// // // c) A idade do usuário em horas
// // // let idadehoras = Number(prompt("Qual é a sua idade?"))
// // // console.log("Você tem", idadehoras * 8760, "horas de vida")

// // // EXERCÍCIO 7
// // // Faça um programa que pergunte ao usuário dois números. 
// // // Em seguida, faça as operações e imprima no console as seguintes mensagens seguidas pelo true ou false:
// // // let n1 = Number(prompt("Insira aqui um número"))
// // // let n2 = Number (prompt("Agora insira outro"))
// // //números inseridos: 40 e 20 respectivamente

// // // // O primeiro numero é maior que segundo? true
// // // console.log("O primeiro número é maior do que o segundo?", n1>n2)
// // // // O primeiro numero é igual ao segundo? false
// // // console.log("O primeiro número é igual ao segundo?", n1 === n2)
// // // // O primeiro numero é divisível pelo segundo? true
// // // console.log("O primeiro número é divisível pelo segundo?", n1 % n2 === 0)
// // // // O segundo numero é divisível pelo primeiro? false
// // // console.log ("O segundo número é divisível pelo primeiro?", n2 % n1 === 0)

// // // DESAFIOS

// // // 1. Para este exercício, será necessário o conhecimento das fórmulas para mudar a unidade de temperatura 
// // // entre Graus Celsius(°C),  Graus Fahrenheit(°F) e Kelvin(K). Abaixo estão duas delas:

// // //     - Graus Fahrenheit(°F) para Kelvin(K)

// // //         ```
// // //         (KELVIN) = (GRAUS_FAHRENHEIT - 32)*(5/9) + 273.15
// // //         ```

// // //     - Graus Celsius(°C) para Graus Fahrenheit (°C)

// // //         ```
// // //         (GRAUS_FAHRENHEIT) = (GRAUS_CELSIUS)*(9/5) + 32
// // //         ```

// // //     a) Calcule e mostre o valor de 77°F em  K, mostrando a unidade no console também.
// // let valorFemK = (KELVIN) = (77-32) * (5/9) + 273.15
// // console.log("O valor de 77ºF em Kelvin é de", valorFemK, "graus")

// // //     b) Calcule e mostre o valor de 80°C em °F, mostrando a unidade no console também
// // let valorCemF = (GRAUS_FAHRENHEIT) = (80) * (9/5) + 32
// // console.log("O valor de 88ºC em Fahrenheit é de", valorCemF, "graus")

// // //     c) Calcule e mostre o valor de 30°C em °F e K, mostrando as unidades no console também
// // letvalorCemF = (GRAUS_FAHRENHEIT) = (30) * (9/5) + 32
// // console.log(letvalorCemF) //86°F
// // let valorFemK2 = (KELVIN) = (86-32) * (5/9) + 273.15
// // console.log(valorFemK2) // 303.15K

// // console.log("O valor de 30°C em °F é de", letvalorCemF, "graus.","Já o valor de 30°C em K é de", valorFemK2,
// //  "graus")

// // //     d) Altere o último item para que o usuário insira o valor em graus Celsius que ele deseja converter
// // let escolhaDoUsuario = Number(prompt("Quantos graus você deseja converter para Kelvin?"))
// // let resultado3 = (GRAUS_FAHREINHEIT) = (escolhaDoUsuario) * (9/5) + 32
// // let resultado4 = (KELVIN) = (resultado3-32 * (5/9) + 273.15)
// // console.log("O valor de", escolhaDoUsuario,"graus foi convertido em", resultado4,"Kelvin")

// // DESAFIO 2

// // Quilowatt-hora é uma unidade de energia; e é muito utilizada para se determinar o consumo de energia 
// //elétrica em residências. Sabe-se que o quilowatt-hora de energia custa R$0.05. 
// // Faça um programa que receba a quantidade de quilowatts consumida por uma residência.

// // a) Calcule e mostre o valor a ser pago por uma residência que consuma 280 quilowatt-hora
// // let valorQwh = 0.05
// // let consumo = 280
// // console.log ("O seu consumo mensal de energia elétrica foi de", valorQwh * consumo, "reais")

// // b) Altere o programa para receber mais um valor: a porcentagem de desconto. 
// // Calcule e mostre o valor a ser pago pela mesma residência acima considerando 15% de desconto
// // let valorQwh = 0.05
// // let consumo = 280
// // let desconto = 15 / 100
// // console.log ("O seu consumo mensal de energia elétrica foi de", (valorQwh * consumo) - desconto, 
// // "reais, pois você teve 15% de desconto.")

// // DESAFIO 3

// // Um grande problema que o mundo tem atualmente é a quantidade de unidades que existem para representar a mesma coisa. Por exemplo, para representar a Massa de um corpo, podemos usar quilograma (kg), onça (oz) e até libra (lb). Para representar Distâncias, existem metro (m), pés (ft), milha (mi). Até para volumes, há várias opções: litro (l), galão (gal),  xícaras (xic). Dada essa introdução, faça o que se pede:

// // a) Procure uma forma de converter libra (lb) para quilograma (kg) e escreva um programa que converta 20lb para kg. Imprima  a resposta no console da seguinte forma: 
// // 20lb equivalem a X kg
// //1 Libras = 0.4536 Quilos
// // let librasTokg = 20 * 0.4536
// // console.log("20 libras equivalem a", librasTokg,"quilos.")

// // b) Procure uma forma de converter onça (oz) para quilograma (kg) e escreva um programa que converta 10.5oz para kg. Imprima  a resposta no console da seguinte forma: 
// // 10.5oz equivalem a X kg
// // kg = oz / 35274
// // let ozTokg = 10.5 / 35274
// // console.log("10.5oz equivalem a", ozTokg, "quilos.")

// // c) Procure uma forma de converter milha (mi) para metro (m) e escreva um programa que converta 100mi para m. Imprima  a resposta no console da seguinte forma: 
// // 100mi equivalem a X m
// // 1mi = 1609,34m
// // let miTom = 100 * 1609.34
// // console.log("100mi equivalem a", miTom,"metros")

// // d) Procure uma forma de converter pés (ft) para metro (m) e escreva um programa que converta 50ft para m. Imprima  a resposta no console da seguinte forma: 
// // 50ft equivalem a X m
// // 1ft = 0.3048
// // let ftTom = 50 * 0.3048
// // console.log("50ft equivalem a", ftTom, "metros")

// // e) Procure uma forma de converter galão (gal) para litro (l) e escreva um programa que converta 103.56gal para litro. Imprima  a resposta no console da seguinte forma: 
// // `103.56gal equivalem a X l`
// // 1gal = 3.78541
// // let galToL = 103.56 * 3.78541
// // console.log("103.56gal equivalem a", galToL,"litros")

// // f) Procure uma forma de converter xícara (xic) para litro (l) e escreva um programa que converta 450xic para litro. Imprima  a resposta no console da seguinte forma: 
// //`450 xic equivalem a X l`
// // xic * 6 / 25
// // let xicaras = (450 * 6) / 25
// // console.log("O valor de 450xic convertido é de", xicaras, "litros")

// // g) Escolha ao menos um dos itens anteriores e modifique o programa para que ele peça ao usuário o valor da unidade original antes de converter
// // VOU MODIFICAR A LETRA F - XÍCARAS

// let escolhaDoUsuario2 = Number(prompt("Quantas xícaras você deseja converter para litros?"))
// let resultado = (escolhaDoUsuario2 * 6) / 25
// console.log("O valor de", escolhaDoUsuario2,"foi convertido para", resultado, "litros")
