<<<<<<< HEAD

$(document).ready(function(){
var botao = $("#botao");
var person = prompt("Player 1");

if (person != null) {
  document.getElementById("player1").innerHTML =
  "Player 1:  " + person + "";
}
 person = prompt("Player 2");

if (person != null) {
  document.getElementById("player2").innerHTML =
  "Player 2:  " + person + "";
}


botao.on({
	click: function(event){
		alert("aqui");
	}

});


});
=======
var cont = 0;

$(document).ready(function () {
	$("#botao").click(function () {
		CriarElementos();
	});
});

var contImage= 0;

function CriarElementos() {
	for (let index = 0; index < 4; index++) {

		$(".jogo").append('<tr>');
		
		for (let index = 0; index < 5; index++) {
			$(".jogo").append('<td class="card">'+contImage+'</td>');
			contImage =contImage+1;	
		}

		$(".jogo").append('</tr>');
	
	}
}
>>>>>>> 8088eadabceea98a822d101bee659fe42171a454
