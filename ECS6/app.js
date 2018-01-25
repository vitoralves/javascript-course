
class Comum {
	constructor(nome, anoCriacao) {
		this.nome = nome;
		this.anoCriacao = anoCriacao;
	}

	
	getIdade() {
		let anoAtual = new Date();
		return anoAtual.getFullYear() - this.anoCriacao;
	}
	
	
}

class Parque extends Comum{
	constructor(nome, anoCriacao, area, nmroArvores) {
		super(nome, anoCriacao);
		this.area = area;
		this.nmroArvores = nmroArvores;
	}

	densidadeArborea() {
		console.log(`${this.nome} tem densidade de ${this.nmroArvores/this.area} árvores por km quadrados.`);
	}
}

class Rua extends Comum{
	constructor(nome, anoCriacao, tamanho) {
		super(nome, anoCriacao)
		this.tamanho = tamanho;
	}

	classificacao() {
		if (this.tamanho <= 1000) {
			console.log(`${this.nome}, contruída em ${this.anoCriacao} é uma rua pequena`);
		}else if (this.tamanho > 1000 && this.tamanho <= 5000) {
			console.log(`${this.nome}, contruída em ${this.anoCriacao} é uma rua normal`);
		}else if (this.tamanho > 5000 && this.tamanho <= 10000) {
			console.log(`${this.nome}, contruída em ${this.anoCriacao} é uma rua grande`);
		}else if (this.tamanho > 10000){
			console.log(`${this.nome}, contruída em ${this.anoCriacao} é uma rua muito grande`);
		}else {
			console.log(`${this.nome}, contruída em ${this.anoCriacao} é uma rua normal`);
		}
	}
}

(function init() {
	console.log('******************RELATÓRIO PARQUE******************');

	var parqueArr = [new Parque('Nome do Parque', 1990, 5000, 300), new Parque('Parque 2', 1994, 500, 300), new Parque('Avenida Quinta', 1980, 900, 700)];

	//calcular quantidade de parques e média de idades
	function qntdEMedia(arr) {
		const sum = arr.reduce((ant, prox, index) => ant + prox, 0);
		return [arr.length, sum / arr.length];
	}

	//verifica quantos parques temos e a média da idade deles
	let [soma, quantidade] = qntdEMedia(parqueArr.map(c => c.getIdade()));
	console.log(`Os ${soma} parques tem média de idade ${quantidade} anos.`);

	//chama o método da Classe que retorna a densidade arbórea
	parqueArr.map(p => p.densidadeArborea());

	//Procura por um parque que tem mais de 500 árvores
	console.log('O parque '+parqueArr.filter(p => p.nmroArvores > 500)[0].nome+' tem mais de 500 árvores');

	console.log('******************RELATÓRIO RUAS******************');

	var streetArr = [new Rua('Rua de Teste', 1994, 1000), new Rua('Avenida das Rosas', 1800, 20000), new Rua('Nilton dos Santos', 1760, 30044)];

	//calcular quantidade de ruas, somatório do tamanho das ruas e a média
	function tamanhoEMedia(arr) {
		const sum = arr.reduce((ant, prox, index) => ant + prox, 0);
		return [arr.length, sum, sum  / arr.length];
	}

	//printa média das ruas
	let [qtd, total, media] = tamanhoEMedia(streetArr.map(s => s.tamanho));
	console.log(`As ${qtd} ruas tem um total de ${total} KM juntos e a média é de ${media} KM.`);

	//printa classificação das ruas
	streetArr.map(s => s.classificacao());
})();
