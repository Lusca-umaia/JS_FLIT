try {
    function confirmarDados(nome) {
        var nomeCompleto = nome + " da Silva"

        function getAnoNascimento() {
            var idade = 20
            var ano = 2022 - idade
            return ano
        }
        console.log("Nome completo: ", nomeCompleto)
        console.log("Ano de nascimento: ", getAnoNascimento())
        console.log("idade: ", idade)
    }

    confirmarDados("Marcos")
} catch (error) {
    console.log("Um erro foi encontrado e não foi possível concluir a operação")
}
