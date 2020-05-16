// sorteia um numero entre 0 e 1
let n1 = Math.random();
console.log('Numero Sorteado :' + n1);

//numero sorteado e multiplicar
n1*=100;
console.log('Numero multiplicado: ' + n1);

//numero inteiro
n1 = parseInt(n1);
console.log('Numero inteiro: '+n1);

let n2 = parseInt(Math.random()*100);
console.log('Novo numero: ' +n2);

//Operadores aritimeticos
let resultado = (n1+n2);
console.log(n1+ ' + ' + n2 + ' = ' +resultado);

resultado = (n1-n2);
console.log(n1+ ' - ' + n2 + ' = ' +resultado);

resultado = (n1/n2);
console.log(n1+ ' / ' + n2 + ' = ' +resultado.toFixed(2));

resultado = (n1*n2);
console.log(n1+ ' x ' + n2 + ' = ' +resultado);

resultado = (n1%n2);
console.log(n1+ ' % ' + n2 + ' = ' +resultado);

resultado = (n1**n2);
console.log(n1+ ' ** ' + n2 + ' = ' +resultado);

//Operadores relacionais

resultado = (n1>n2);
console.log(n1+ ' > ' + n2 + ' = ' +resultado);

resultado = (n1<n2);
console.log(n1+ ' < ' + n2 + ' = ' +resultado);

resultado = (n1>=n2);
console.log(n1+ ' >= ' + n2 + ' = ' +resultado);

resultado = (n1<=n2);
console.log(n1+ ' <= ' + n2 + ' = ' +resultado);

resultado = (n1 == n2);
console.log(n1+ ' == ' + n2 + ' = ' +resultado);

resultado = (n1!=n2);
console.log(n1+ ' != ' + n2 + ' = ' +resultado);

n1 = 20;
n2 = 40;

console.log(n1);
console.log(n2);

//operador ou - basta 1 ser verdadeiro para a resposta ser TRUE
resultado = ((n1 < n2) || (n2 > 60));
console.log(resultado);

//operador e- todos devem ser verdadeiros para a resposta ser true
resultado = ((n1 < n2) && (n2 > 60));
console.log(resultado);

//operador nao- inverte a respostas
resultado = !((n1 < n2) && (n2 > 60));
console.log(resultado);
