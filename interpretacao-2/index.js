
// Leia o c�digo abaixo, que foi feito por uma pessoa desenvolvedora, contratada para automatizar algumas tarefas de um supermercado


let fruta = prompt("Escolha uma fruta")
let preco

switch (fruta) {
	case "Laranja":
		preco = 3.5
		break;
	case "Ma��":
		preco = 2.25
		break;
	case "Uva":
		preco = 0.30
		break;
	case "P�ra":
		preco = 5.5
		break; // BREAK PARA O ITEM D
	default:
		preco = 5
		break;
}

console.log("O pre�o da fruta ", fruta, " � ", "R$ ", preco)


// a) Para que serve o c�digo acima?
// Para sabermos os valores respctivos às frutas 

// b) Qual ser� a mensagem impressa no console, se o valor de fruta for "Ma��"?
// Será impresso "5.25"

// c) Considere que um usu�rio queira comprar uma "P�ra", qual seria a mensagem impressa no console se retir�ssemos o "break" que est� logo acima do "default" (o "break" indicado pelo coment�rio "BREAK PARA O ITEM D")?
// Será impresso o valor "5"