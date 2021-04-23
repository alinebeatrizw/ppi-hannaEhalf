
		$(document).on('click', '#hamburger-aparece', function(){ 
			$('#index, .botao-baixo, #sobre, #contato').css("display", "block"); 
			$('#hamburger-esconde').css("display", "block")
			$('#hamburger-aparece').css("display", "none")
		});

		
		$(document).on('click', '#hamburger-esconde', function(){ 
			$('#index, .botao-baixo, #sobre, #contato').css("display", "none"); 
			$('#hamburger-esconde').css("display", "none")
			$('#hamburger-aparece').css("display", "block")
		});
