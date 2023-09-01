
// Leia o c�digo

const numero = Number(prompt("Digite o primeiro n�mero."))

if (numero > 0) {
	console.log("Esse n�mero passou no teste")
	let mensagem = "Essa mensagem � secreta!"
}

console.log(mensagem)

// a) O que a primeira linha est� fazendo?
// na quarta linha o código pede ao usuário para que digite um número 

// b) Considere um usu�rio digitou o n�mero 10. Qual ser� a mensagem do terminal? E se fosse o n�mero -10?
// Se for 10 será impresso "Esse numero passou no teste", se for -10 dará erro e nada será impresso 

// c) Haver� algum erro no console? Justifique usando os conceitos de bloco ou escopo.
// Sim, pois há um "console.log" fora do IF