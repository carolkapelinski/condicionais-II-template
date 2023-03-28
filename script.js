// ifs aninhados
const idadeDependente = prompt('idade da pessoa dependente')

if(idadeDependente >= 13){
    if(idadeDependente <= 17){
        console.log("A pessoa dependente pode ter o cartão vinculado ao seu")
    } else {
        console.log("A pessoa dependente tem idade maior que 17, consulte opões do Labank")
    }
} else {
    console.log("A pessoa dependente tem menos de 13 anos e ainda não pode ter o cartão.")
}


// operador lógico
if(idadeDependente >= 13 && idadeDependente <= 17){
    console.log("A pessoa dependente pode ter o cartão vinculado ao seu")
} else {
    console.log("Consulte outras possibilidades do Labank")
}


//if ternário
const resposta = prompt("Você já possui uma conta no Labank?")
// if (resposta === "sim"){
//     console.log("Boas vindas")
// } else {
//     console.log("Abra sua conta")
// }

resposta.toLowerCase() === "sim" ? 
console.log("Boas vindas") :
console.log("Abra sua conta")



//switch case
const respostaTelefone = Number(prompt('Escolha seu cartão \n1 para ‘Fácil’\n2 para ‘Black’\n3 para ‘Platinum’\n4 para ‘Master Gold’'))
switch (respostaTelefone) {
    case 1:
        console.log("Cartão Fácil")
        break
    case 2:
        console.log("Cartão Black")
        break
    case 3:
        console.log("Cartão Platinum")
        break
    case 4:
        console.log("Cartão Master Gold")
        break
    default:
        console.log('Escolha uma das quatro opções disponíveis')
}




//pra guardar na cabeça 
// 1. Crie um código que receba um número por prompt e verifique se esse número é divisível por 2 E por 3. Faça isso:
//  Utilizando ifs aninhados
// Utilizando um operador lógico para unir duas operações relacionais

const number = Number(prompt('Digite o número:'))

if(number % 2 === 0)
    if(number % 3 === 0)



if(number % 2 === 0 && number % 3 === 0)

// if (number === 30){
//          console.log("UFA, ACERTEI!")
//     } else {
//          console.log("Não foi dessa vez :(")
//     }
number === 30 ? 
console.log("UFA, ACERTEI!") :
console.log("Não foi dessa vez :(")

// 3. Agora comente o ternário. Crie estrutura de switch case que verifique se o número é 6, 12, 18, 24 ou 30, 
// e imprima uma mensagem diferente para cada número.

// Caso o número escolhido não seja nenhum dos relacionados acima, imprima a mensagem “O número é maior que 30 ou menor que 6!”

switch (number) {
    case 6:
        console.log("o número é 6")
        break
    case 12:
        console.log("o número é 12")
        break
    case 18:
        console.log("o número é 18")
        break
    case 24:
        console.log("o número é 24")
        break
    case 30:
        console.log("o número é 30")
        break
    default:
        console.log('O número é maior que 30 ou menor que 6!')
}