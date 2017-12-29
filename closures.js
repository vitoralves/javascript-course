// Desafio do conteúdo estudado na seção 5 com foco em closures

//DESAFIO 1: Refazer o método de perguntas sobre emprego usando CLOSURE

/*
function interviewQuestion(job) {
    return function(name) {
        if (job === 'designer') {
            console.log(name + ' você pode explicar que tipo de UX você desenvolve?');
        } else if (job === 'teacher') {
            console.log(name + ' qual matéria você ensina?');
        } else {
            console.log('Olá '+ name + ' o que você faz?');
        }
    }
}

var vitor = interviewQuestion('designer');
vitor('Vitor');

interviewQuestion('teacher')('Zé');
*/


/*
DESAFIO 2: Criar um game de perguntas e respostas utilizando closures para manter o código 
privado e não interferir em códigos de outro programador caso for usado como plugin
*/
(function game() {
    var arrayPerguntas = [];
    var total = 0;
    function question(pergunta, respostas, correta) {
        var q = {
            pergunta: pergunta,
            respostas: respostas,
            correta: correta
        };
        arrayPerguntas.push(q);
    }
    question('Qual a cor do céu?', [{ 0: 'Azul' }, { 1: 'Vermelho' }], 0);
    question('O curso foi comprado na udemy?', [{ 0: 'Sim' }, { 1: 'Não' }], 0);
    question('JavaScript é uma linguagem chata?', [{ 0: 'Sim' }, { 1: 'Não' }], 1);

    function init() {
        var aleatorio = Math.random() * arrayPerguntas.length;
        console.log(arrayPerguntas[Math.floor(aleatorio)].pergunta);
        for (var i = 0; i < arrayPerguntas[Math.floor(aleatorio)].respostas.length; i++) {
            console.log(i + ' - ' + arrayPerguntas[Math.floor(aleatorio)].respostas[i][i]);
        }
        prompFunc(Math.floor(aleatorio));
    }

    function prompFunc(posicao) {
        var resposta = prompt('Informe o valor da resposta correta.');
        if (resposta == null) {
            console.log('Fim de Jogo!');
            console.log('Pontuação: ' + total);
        } else if (resposta == arrayPerguntas[posicao].correta) {
            console.log('*************************************');
            console.log('Parabéns! Você acertou!');
            total++;
            console.log('Pontuação: ' + total);
            console.log('*************************************');
            init();
        } else {
            console.log('*************************************');
            console.log('Opss! Você errou, tente novamente.');
            console.log('Pontuação: ' + total);
            console.log('*************************************');
            init();
        }
    }

    init();
})();