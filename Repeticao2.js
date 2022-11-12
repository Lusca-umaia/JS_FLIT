let array = [12, 6, 42, 9, 11, 102, 44, 15]
let arrayLeng = array.length
let contador = 0
let contadorTwo = 0

//Parando a estrutura de repetição quando se encontra um valor primo no Array
for (i = 0; i < arrayLeng; i++) {
    contador = array[i]
    if (contador % 2 != 0) {
        break;
    }
}

console.log(contador, " - Primeiro Valor primo do Array") // 9 - Primeiro Valor primo do Array

//Eliminando valores que estão entre 40 e 50
for (a = 0; a < arrayLeng; a++) {
    contadorTwo = array[a]
    if (contadorTwo > 40 && contadorTwo < 50) {
        continue;
    }
    console.log(contadorTwo)
}