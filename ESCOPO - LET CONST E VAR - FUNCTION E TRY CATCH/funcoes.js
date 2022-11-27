function confirmarDados(nome, idade) {
    var nomeCompleto = nome + " da Silva"

    function getAnoNascimento() {
        var ano = 2022 - idade
        return ano
    }
    var anoDeNascimento = getAnoNascimento();

    function geracaoPertence() {

        if (anoDeNascimento <= 1995) {
            return "geração X";
        }
        else {
            return "millenium"
        }

    }
    var geracao = geracaoPertence();

    console.log("Nome completo: ", nomeCompleto)
    console.log("Ano de nascimento: ", getAnoNascimento())
    console.log("geração ", geracao)
}

confirmarDados("Marcos", 40)