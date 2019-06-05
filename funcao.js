var cont = 0;
var contImage= 0;

$(document).ready(function () {
	$("#botao").click(function () {
		$(".jogo").empty();
		contImage= 0;
		CriarElementos();
	});
});

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