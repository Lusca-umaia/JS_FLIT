function confirmarDados(nome) {
    const nomeCompleto = nome + " da Silva"
    let geracao = "millenium"

    function getAnoNascimento() {
        const idade = 40
        const ano = 2022 - idade
        return ano
    }
    const anoDeNascimento = getAnoNascimento()
    if (anoDeNascimento <= 1995) {
        geracao = 'geração X'
    }
    console.log("Nome completo: ", nomeCompleto)
    console.log("Ano de nascimento: ", anoDeNascimento)
    console.log("Geração: ", geracao)
}

confirmarDados("Marcos")