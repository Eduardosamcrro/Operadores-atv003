//Operadores Aritméticos (matemáticos)
// no O.A sao utilizados operadores matematicos (+ - * /)
/* tambem pode ser utilizados operadores de encrento/decremento
ex:
a=6
valor total = ++a;
= 7
quando é utilizado '++' é acrescentado 1 a mais. 
quando é utilizado "--" é tomado 1.
*/
var a, b, c;
a=8; b=18;
c= a + b;
console.log( c )

//Operadores de Atribuição
/*
quando utlizamos o ' = ' estamos atrindo um valor a uma variavel.
ex:
variavel = 8 

*/
var a, b, c;
a=9; b=20;
a = a + b ;
b = b - a;
/* ou pode ser utilizado outras formas
como:
a += b ;
a -= b ;
a /= b ;
a *= b ;
*/ 
console.log( a)
console.log( b)

//Operadores de Sequencia
/* os operadoes de sequecia sao utilizados para  textos
quando utilizamos + nao é um calculo é somente a junçao de duas palavras ou mais
*/
var nome, sobrenome, nomeCompleto;
nome = "Eduardo"
sobrenome = " oliveira"
nomeCompleto = nome +' '+ sobrenome;
console.log(nomeCompleto)

//Opearadores de comparaçao
/*
quando utilizamos "==" estamos comparando se uma vareavel é igual a outra
ex
A=8
b=9
C=(A == B)
COMO AMBAS TEM O VALOR DIFENTE, O RESULTADO SERIA ( FALSE) CASO FOSSE IGUAIS, O VALOR SERIA (TRUE).
Quando utilizamos '===' comparamos se a forma escrita é texto ou numero 
ex:
A=8
b='8'
C=(A === B)
o valor sera false, pois verifica q um é texto e o outro numero.
outro operador "!=" significa diferente 
A=8
b=9
C=(A != B)
o valor sera true, pos ambos valores sao diferentes, caso fossem iguais seriam false 
para verificar se é diferente ou se o tipo é o mesmo, utilizamos !==.
tambem podemos comparar se um é maior ou menor q o outro utilizando "<>" ou igual
A=8
b=9
C=(A <= B)
o resultado seria true, pois a variavel b é maior q a.
*/
var a, b, c;
a=8; b=18;
c = (a == b)

console.log( c )
//Operador condicional (ternario) 
var idade, eleitor;
idade=18
eleitor = (idade <18) ? "Nao eleitor": "É um eleitor";
console.log(eleitor + " a idade esta correta")
//operadores logicos
/*
quando utilizamos && significa " e "
quando utilizamos o || significa " ou " ou uma condiçao ou outra se uma for 7 e a outra 12, sera sempre verdadeira o resultado que for igual a ambos 
*/
var idade, eleitor, resultado;
idade=18
eleitor = (idade <18) ? "Nao eleitor": "É um eleitor";
resultado = (idade > 17 && idade < 25)//o resultado sera TRUE Ou FALSE
console.log(resultado)
