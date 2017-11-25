/*
1. Criar um array com anos de nascimento de pessoas
2. Criar um array vazio
3. usar um loop para preencher o array com a idade das pessoas
4. Usar outro loop para mostrar no console quais pessoas tem idade igual ou maior que 18
5. Criar uma função PŕintFullAge que recebe o array com as idades como parametro e retorna um array com true/false, true se for maior= 18
6. Chamar a função com array diferentes e salvar o resultado em duas variaveis
*/

console.log('************************CHALLENGE 2************************');
var anoNascimento = [1965, 2008, 1992, 1994];
var arrayVazio = [];

for (var i = 0; i < anoNascimento.length; i++) {
    arrayVazio.push(2017-anoNascimento[i]);
}

console.log('Array vazio com as idades: '+arrayVazio);

for (var i = 0; i < anoNascimento.length; i++) {
    if (2017 - anoNascimento[i] >= 18) {
        console.log('Maior de idade '+anoNascimento[i]);
    }
}

function printFullAge(array) {
    var arrayTrueFalse = [];
    for (var i = 0; i < array.length; i++) {
        if (2017 - array[i] >= 18) {
            arrayTrueFalse.push(true);
        }else {
            arrayTrueFalse.push(false);
        }
    }
    return arrayTrueFalse;
}

var array1 = [1995, 2009, 2011, 2015, 2017, 1968, 1465, 1935];
var array2 = [1994, 1995, 1991, 1992, 1997, 2000];

var variavel1 = printFullAge(array1);
var variavel2 = printFullAge(array2);

console.log('Var 1 '+variavel1);
console.log('Var 2 '+variavel2);