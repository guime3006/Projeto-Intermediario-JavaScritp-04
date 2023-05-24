/*

- A v(numberRamdom) irar receber duas funções, uma de gerar o número aleatorio entre 1 e 1000 
e arredondar e numero para cima

- v(getNumberRamdom) fica responsavel por manipular o DOM e exibir o número na tela

- por ultimo o console para capturar esse valor

*/

let numberRamdom = Math.floor(Math.random() * 1001);

let getNumberRamdom = document.getElementById("ramdom-number").innerHTML = `${numberRamdom}`;

console.log(`Number : ${numberRamdom}`);
