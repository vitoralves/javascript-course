console.log('************************CHALLENGE 1************************');
//Challenge 1 of Javascript Course
//Inserir a altura de duas pessoas em centimetros e multiplicar 5 vezes pela idade de cada um. O Mior resultado é o vencedor.
//No final adicionar um terceiri jogador de decidir quem ganha

//alturas dos participantes
var altura1 = 172;
var altura2 = 165;
var altura3 = 100;
//idade dos participantes
var age1 = 26;
var age2 = 29;
var age3 = 24;
//resultado 
var score1, score2, score3;
 
score1 = altura1 + age1 * 5;
score2 = altura2 + age2 * 5;
score3 = altura3 + age3 * 5;
console.log(score1 + ' ' + score2 + ' ' + score3);

if (score1 > score2 && score1 > score3) {
    console.log('Jogador 1 venceu com ' + score1 + ' pontos');
} else if (score2 > score1 && score2 > score3) {
    console.log('Jogador 2 venceu com ' + score2 + ' pontos');
} else if (score3 > score1 && score3 > score2) {
    console.log('Jogador 3 venceu com ' + score3 + ' pontos');
} else {
    console.log('Empate!');
}
