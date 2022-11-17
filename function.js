function init() {
    let nome = prompt("Insira seu nome:")

    let senha = prompt("Insira uma senha:")

    Verify(nome, senha)
}

function Verify(nome, senha) {
    let verifyName, verifySenha

    verifyName = prompt("Verificação - Informe o seu nome:")
    verifySenha = prompt("Verificação - Informe a seu senha:")

    if (verifyName == nome && verifySenha == senha) {
        console.log("Tudo ok, true")
        alert("True")
    }
    else {
        console.log("Valores errados, false")
        alert("False")
    }
}

init()
