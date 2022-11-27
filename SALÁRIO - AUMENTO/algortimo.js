let salario, armazenar, controle = 0

while (controle == 0) {
    salario = parseInt(prompt("Informe o salário base"))

    if (salario > 0 && salario != NaN) {
        controle = 1;
    }
}

switch (true) {
    case salario <= 1500:
        armazenar = salario * 1.20
        console.log(`Salário inicial: ${salario}\nSalário com aumento de 20%: ${armazenar}`)
        alert(`Salário inicial: ${salario}\nSalário com aumento de 20%: ${armazenar}`)
        break;
    case salario > 1500 && salario <= 2000:
        armazenar = salario * 1.15
        console.log(`Salário inicial: ${salario}\nSalário com aumento de 15%: ${armazenar}`)
        alert(`Salário inicial: ${salario}\nSalário com aumento de 15%: ${armazenar}`)
        break;
    case salario > 2000 && salario <= 3000:
        armazenar = salario * 1.10
        console.log(`Salário inicial: ${salario}\nSalário com aumento de 10%: ${armazenar}`)
        alert(`Salário inicial: ${salario}\nSalário com aumento de 10%: ${armazenar}`)
        break;
    case salario > 3000:
        armazenar = salario * 1.05
        console.log(`Salário inicial: ${salario}\nSalário com aumento de 5%: ${armazenar}`)
        alert(`Salário inicial: ${salario}\nSalário com aumento de 5%: ${armazenar}`)
        break;
}

console.log(salario)
