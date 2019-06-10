
var  imgs = new Array ("Nova Pasta/1.jpg","Nova Pasta/2.jpg","Nova Pasta/3.jpg","Nova Pasta/4.jpg","Nova Pasta/5.jpg",
"Nova Pasta/6.jpg","Nova Pasta/7.jpg","Nova Pasta/8.jpg","Nova Pasta/9.jpg","Nova Pasta/10.jpg",
 "Nova Pasta/11.jpg","Nova Pasta/12.jpg","Nova Pasta/13.jpg","Nova Pasta/14.jpg","Nova Pasta/15.jpg",
 "Nova Pasta/16.jpg","Nova Pasta/17.jpg","Nova Pasta/18.jpg","Nova Pasta/19.jpg","Nova Pasta/20.jpg")

var cont = 0;
var contImage= 0;

var contJogador = 0;

var clickA=-1;
var clickB=0;

$(document).ready(function () {
	$("#botao").click(function () {
		$(".jogo").empty();
		mudarJogador(contJogador);
		contImage= 0;
		CriarElementos();
	});
});

function mudarJogador(i) {
	if(i==0){
		contJogador=1;
		$('#jog1').css("color", "blue");
		$('#jog2').css("color", "black");
	} 

	if(i==1){
		contJogador=0;
		$('#jog2').css("color", "blue");
		$('#jog1').css("color", "black");
	}
}

function ImparPar(num){
	if(num & 1){
		return false;
	} else {
		return true;
	}
}

var div = document.getElementById('tabela');

div.addEventListener('click', function(e) {
	if(clickA == -1){
		clickA = parseInt(e.target.id)+1;
	} else {
		clickB = parseInt(e.target.id)+1
	}

	console.log(clickA);
	console.log(clickB);

	if (clickB != 0) {
		if(ImparPar(clickA)){
			if (clickA-1 == clickB) {
				alert("acerto")
			} else {
				alert("errou")
			}
		} else {
			if (clickA+1 == clickB) {
				alert("acerto")
			} else {
				alert("errou")
			}
			mudarJogador(contJogador);
		}
		clickA = -1;
		clickB = 0;
	} else {
		alert("Escolha o outra imagem!!!");
	}
	
});
		   
function CriarElementos() {
	for (let index = 0; index < 4; index++) {

		$(".jogo").append('<tr>');
		
		for (let index = 0; index < 5; index++) {
			$(".jogo").append('<td class="card"><img id="'+contImage+'" src="'+imgs[contImage]+'"/></td>');
			contImage =contImage+1;	
		}

		$(".jogo").append('</tr>');
	}
}

