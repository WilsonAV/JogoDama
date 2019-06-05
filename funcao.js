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