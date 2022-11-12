let array = [12, 6, 9, 42, 11, 102, 44, 15]
let arrayLeng = array.length
let Soma = 0
let contador = 0

//Soma dos valores do Array utilizando for
for (i = 0; i < arrayLeng; i++) {
    Soma = array[i] + Soma
}

//Soma dos valores do Array utilizando while
while (contador < arrayLeng) {
    Soma = array[contador] + Soma
    contador++
}

//Soma dos valores do Array utilizando do while
do {
    Soma = array[contador] + Soma
    contador++
} while (contador < arrayLeng);

//As estruturas devem ser inicializas individualmente para que as variáveis de controle e o valor da soma não sejam interfeirods
