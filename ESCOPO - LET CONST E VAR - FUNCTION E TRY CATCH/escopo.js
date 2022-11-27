function confirmarDados(nome) {
    var nomeCompleto = nome + " da Silva"
    var idade = 20

    function getAnoNascimento() {
        var ano = 2022 - idade
        return ano
    }
    console.log("Nome completo: ", nomeCompleto)
    console.log("Ano de nascimento: ", getAnoNascimento())
    console.log("idade: ", idade)
}

confirmarDados("Marcos")