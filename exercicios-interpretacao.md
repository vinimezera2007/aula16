
# Interpreta��o de c�digo

Tente responder os exerc�cios dessa se��o sem executar o c�digo.  
Se ficar muito dif�cil, pode rodar no seu computador para analisar e pensar sobre o resultado.

---

#### 1. Leia o c�digo

```
const respostaDoUsuario = prompt("Digite o n�mero que voc� quer testar")
const numero = Number(respostaDoUsuario)

if (numero % 2 === 0) {
	console.log("Passou no teste.")
}
else {
	console.log("N�o passou no teste.")
}
```

a) Explique o que o c�digo faz. Qual o teste que ele realiza?

b) Para que tipos de n�meros ele imprime no console "Passou no teste"?

c) Para que tipos de n�meros a mensagem � "N�o passou no teste"?

---

#### 2. Leia o c�digo

Leia o c�digo abaixo, que foi feito por uma pessoa desenvolvedora, contratada para automatizar algumas tarefas de um supermercado.

```
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
```

a) Para que serve o c�digo acima?

b) Qual ser� a mensagem impressa no console, se o valor de fruta for "Ma��"?

c) Considere que um usu�rio queira comprar uma "P�ra", qual seria a mensagem impressa no console se retir�ssemos o "break" que est� logo acima do "default" (o "break" indicado pelo coment�rio "BREAK PARA O ITEM D")?

---

#### 3. Leia o c�digo

```
const numero = Number(prompt("Digite o primeiro n�mero."))

if (numero > 0) {
	console.log("Esse n�mero passou no teste")
	let mensagem = "Essa mensagem � secreta!"
}

console.log(mensagem)
```

a) O que a primeira linha est� fazendo?

b) Considere um usu�rio digitou o n�mero 10. Qual ser� a mensagem do terminal? E se fosse o n�mero -10?

c) Haver� algum erro no console? Justifique usando os conceitos de bloco ou escopo.
