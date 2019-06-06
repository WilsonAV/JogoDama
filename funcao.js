$(document).ready(function(){
	var botao = $("#botao");
	var img1 = ('<img src = "peca1">');
	botao.on({
		click: function(event){
			event.preventDefault();
			
			inserir(this);
			
			// $(".preto").css({'background-color' : 'red'});
			//for (var i = 0; i <12; i++) {
			//	tabu = $("blue");

			
			}
		}
	//})

,
		mouseover: function(){
			botao.css("background-color", "green");
		},
		mouseout: function(){
			botao.css("background-color","");
		}

	});

	function inserir(this){
		var a = this.val();
		move ();

	}


	Calcular();
	function Calcular(){
		let preco = $(".info-preco");
		let qtd = $(".info-qtde");
		let total= $(".info-total");

		for (var i = preco.length - 1; i >= 0; i--) {
			total[i].innerHTML =(preco[i].innerHTML*qtd[i].innerHTML).toFixed(2);

		}
	}
	Seleciona();
	function Seleciona(){
		 $("tr:even").css("background-color", "lightgrey");
	}

	Valor();

	function Valor(){
		let preco = $(".info-total");
		for (var i = preco.length - 1; i >= 0; i--) {
			if(preco[i].innerHTML >= 50)
				preco[i].style.color = "red";
			else if(preco[i].innerHTML < 10)
				preco[i].style.color = "green";
			else
				preco[i].style.color = "orange";
		}
	}

	let evento = $(".prod");
		evento.on("click",function(event){
			let texto = $(this).text();
			$("#nome").val(texto);
					});


	function contador(){
		let preco = $(".info-preco");
		let qtd = $(".info-qtde");
		let soma = 0;
		let soma1 = 0;
		for (let i = preco.length - 1; i >= 0; i--) {
			soma += parseFloat(preco[i].innerHTML);		
		};

		for (let i = qtd.length - 1; i >= 0; i--) {
			soma1 += parseFloat(qtd[i].innerHTML);		
		};
		
		para.text("Itens : "+preco.length+ " Quantidade: "+soma1 +" Total R$: "+soma);

	}








});