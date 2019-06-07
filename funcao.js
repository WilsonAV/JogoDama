
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
