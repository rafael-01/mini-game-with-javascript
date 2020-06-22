function meuNome() {
    var nome = document.querySelector('#nome').value;
    var sobrenome = document.querySelector('#sobrenome').value;
    document.write(`<h2>Olá ${nome} ${sobrenome}, seu nome tem ${nome.length} letras e o seu Sobrenome tem ${sobrenome.length} letras.</h2><br />`)
    document.write(`<p> Seu nome em minúsculo é: ${nome.toLowerCase()} ${sobrenome.toLowerCase()}</p><br />`)
    document.write(`<p> O seu nome em maiúsculo é : ${nome.toUpperCase()} ${sobrenome.toUpperCase()}</p>`)
}