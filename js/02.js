// sorteia um numero entre 0 e 1
let n1 = parseInt(Math.random()*10);
let n2 = parseInt(Math.random()*10);

console.log('Valor de n1: '+n1);
console.log('Valor de n2: '+n2);

if (n1 > n2)
{
  console.log(n1 + 'é maior que: ' +n2);
}
else if(n1 < n2)
{
  console.log(n2 + 'é maior que: ' +n1);
}
else
{
  console.log(n2 + 'é igual a: ' +n1);
}

//usando for - sortear 100 numeros
let total = 0;
let maior = 0;
let menor = 1000;

for (let i = 0; i < 5; i++)
{
 let n3 = parseInt(Math.random()*100);
 //efetuando a somatoria dos numeros
 total+=n3;

//descobrir o maior
if (n3 > maior)
{
  maior = n3;
}

//descobrir o menor
if (n3 < menor)
{
  menor = n3;
}

 console.log('Numero sorteado: '+n3);
}
console.log('Maior sorteado: '+maior);
console.log('Total sorteado: '+total);
console.log('Menor sorteado: '+menor);
