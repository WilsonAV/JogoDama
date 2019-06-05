
var  imgs = new Array ("Nova Pasta/1.jpg","Nova Pasta/2.jpg","Nova Pasta/3.jpg","Nova Pasta/4.jpg","Nova Pasta/5.jpg",
"Nova Pasta/6.jpg","Nova Pasta/7.jpg","Nova Pasta/8.jpg","Nova Pasta/9.jpg","Nova Pasta/10.jpg",
 "Nova Pasta/11.jpg","Nova Pasta/12.jpg","Nova Pasta/13.jpg","Nova Pasta/14.jpg","Nova Pasta/15.jpg",
 "Nova Pasta/16.jpg","Nova Pasta/17.jpg","Nova Pasta/18.jpg","Nova Pasta/19.jpg","Nova Pasta/20.jpg")
var cont = 0;
var contImage= 0;

$(document).ready(function () {
	$("#botao").click(function () {
		$(".jogo").empty();
		contImage= 0;
		console.log(imgs.length);
		CriarElementos();
	});
});


			   
function CriarElementos() {
	for (let index = 0; index < 4; index++) {

		$(".jogo").append('<tr>');
		
		for (let index = 0; index < 5; index++) {
			$(".jogo").append('<td class="card"><img src="'+imgs[0]+'"/></td>');
			contImage =contImage+1;	
		}

		$(".jogo").append('</tr>');
	
	}
}

