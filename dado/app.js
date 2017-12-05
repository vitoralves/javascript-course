/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLOBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

REGRAS DO JOGO
-O jogo tem 2 jogadores jogando os rounds
-Em cada turno, um jogador rola o dado quantas vezes ele quiser.Cada resultado obtido é acrescentado aos pontos da rodada
-MAS, se o jogador tirar 1, todo o total obtido na rodada é perdido.Depois disso é a vez do próximo jogador
-O jogador pode escolher para 'GUARDAR', que significa que o total da rodada é adicionado a sua pontuação global. Depois disso, é a vez do próximo jogador
- O primeiro jogador a conseguir 100 pontos em sua pontuação Global ganha o jogo
*/

var total, totalRodada, jogadorAtivo, dado;

total = [0, 0];
totalRodada = 0;
jogadorAtivo = 0;
dado = Math.floor(Math.random() * 6) + 1;

novoJogo();

document.querySelector('.btn-roll').addEventListener('click', function () {

    dado = Math.floor(Math.random() * 6) + 1;
    dadoDom = document.querySelector('.dice');
    dadoDom.style.display = 'block';
    dadoDom.src = 'dice-' + dado + '.png';

    if (dado === 1) {
        document.getElementById('current-' + jogadorAtivo).textContent = 0;
        document.getElementById('score-' + jogadorAtivo).textContent = 0;
        toggleActive();
        total[jogadorAtivo] = 0;
        jogadorAtivo = jogadorAtivo === 1 ? 0 : 1;
    } else {
        totalRodada += dado;
        document.getElementById('current-' + jogadorAtivo).textContent = totalRodada;
    }
});

document.querySelector('.btn-hold').addEventListener('click', function () {
    total[jogadorAtivo] = total[jogadorAtivo] + totalRodada;
    if (total[jogadorAtivo] >= 10) {
        document.getElementById('name-' + jogadorAtivo).textContent += 'VENCEDOR!!';
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.btn-roll').setAttribute('disabled', 'true');
        document.querySelector('.btn-hold').setAttribute('disabled', 'true');
        document.querySelector('.player-' + jogadorAtivo + '-panel').classList.add('winner');
    } else {
        document.getElementById('score-' + jogadorAtivo).textContent = total[jogadorAtivo];
        document.getElementById('current-' + jogadorAtivo).textContent = 0;
        toggleActive();
        jogadorAtivo = jogadorAtivo === 1 ? 0 : 1;
        totalRodada = 0;
    }
});

document.querySelector('.btn-new').addEventListener('click', novoJogo);

function novoJogo() {
    jogadorAtivo = 0;
    totalRodada = 0;
    total = [0, 0];
    document.getElementById('name-0').textContent = 'jogador 1';
    document.getElementById('name-1').textContent = 'jogador 2';
    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;
    document.getElementById('score-0').textContent = 0;
    document.getElementById('score-1').textContent = 0;
    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.btn-roll').removeAttribute('disabled');
    document.querySelector('.btn-hold').removeAttribute('disabled');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}

function toggleActive() {
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
}