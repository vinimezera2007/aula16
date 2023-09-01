
/**
 * 
 * Fa�a um programa que verifica que turno do dia um aluno estuda.
 * 
 * Pe�a para digitar "M" (matutino), "V" (Vespertino) ou "N" (Noturno). Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". Utilize os blocos "if/else if/else".
 * 
**/

let turno = prompt('Digite um turno \n "M" (matutino) \n "V" (Vespertino) \n "N" (Noturno)')
  
  if (turno === "M") {
    mensagem = "Bom Dia!";

  } else if (turno === "V") {
    mensagem = "Boa Tarde!"

  } else if (turno === "N") {
    mensagem = "Boa Noite!";

  } else {
    mensagem = "Turno Invalido!"
  }

  console.log(mensagem)