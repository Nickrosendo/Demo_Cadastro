$(document).ready(function() {
	
	
	//valida a mudanca do checked do termos de uso
	$("#cbtermos").change(function(){
		
			if ($('#cbtermos').prop("checked") == false ) {
				$('.erro_termos').css('opacity', '100');
				$('#btncadastro').prop('disabled', true);
				$('#btncadastro').css('cursor', 'not-allowed');				
			}
			else{
				$('.erro_termos').css('opacity', '0');
				$('#btncadastro').prop('disabled', false);
				$('#btncadastro').css('cursor', 'default');
				
			}
		
	});

	$('#btncadastro').click(function(){
			
			if ($('#formcadastro input').val() == "") {
				window.alert('campos em branco, preencha-os corretamente');
				error_cont++;
				return false;

			}
			else{	
				window.alert('cadastro valido');
				$('.erro_termos').css('opacity', '0');
				$('#btncadastro').prop('disabled', false);
				$('#btncadastro').css('cursor', 'default');
				error_cont--;
				return true;
			}
	});
 	
	
	$('#txtnome').blur(function(){
		//valida o nome em branco
		if ($(this).val()=="") {
			$('.erro_nome').css('opacity', '100');
			$('#btncadastro').prop('disabled', true);
			$('#btncadastro').css('cursor', 'not-allowed');
			error_cont++;
		}else{
			$('.erro_nome').css('opacity', '0');
			$('#btncadastro').prop('disabled', false);
			$('#btncadastro').css('cursor', 'default');
			error_cont--;
		}
	});
	//valida o sobrenome em branco
	$('#txtsobrenome').blur(function(){
		if ($(this).val()=="") {
			$('.erro_sobrenome').css('opacity', '100');
			$('#btncadastro').prop('disabled', true);
			$('#btncadastro').css('cursor', 'not-allowed');
			error_cont++;
		}else{
			$('.erro_sobrenome').css('opacity', '0');
			$('#btncadastro').prop('disabled', false);
			$('#btncadastro').css('cursor', 'default');
			error_cont--;
		}
	});
	//--------------------------------------------------------------------------------------<DATA>---------------------------
	//||VALIDAÇÃO DE DATA NA PERCA DE FOCUS(BLUR)
	//valida o dia em branco
	$('#txtdia').blur(function(){
		//Estabelece o valor das datas atuais		
			var now= new Date;
			var dia= now.getDate();
			var mes= now.getMonth()+1;
			var ano= now.getFullYear();
		

		//valida o ano em branco
		if ($(this).val()=="") {
			$('.erro_datanasc').css('opacity', '100');
			$('#btncadastro').prop('disabled', true);
			$('#btncadastro').css('cursor', 'not-allowed');
			error_cont++;
		}
		//VALIDA DATA FUTURA
				
			//verifica se a data é maior que a do dia atual
			//verifica se o dia,mes e ano sao maiores que os atuais
			else if ($('#txtdia').val() > dia && $('#txtmes').val() > mes  && $('#txtano').val() > ano ||
				//verifica se o dia e o mes  sao maiores que os atuais e o ano é o atual
				$('#txtdia').val() > dia && $('#txtmes').val() > mes && $('#txtano').val() == ano ||
				//verifica se o dia é maior que o atual e o mes e ano sao os atuais
				$('#txtdia').val() > dia && $('#txtmes').val() == mes && $('#txtano').val() == ano) {
				//caso seja, exibe a mensagem de erro
				$('.erro_datanasc').css('opacity', '100');
				$('#btncadastro').prop('disabled', true);
				$('#btncadastro').css('cursor', 'not-allowed');
				error_cont++;
			}
			 //valida velhice 
		else if ($("#txtano").val()<=1910) {
			$('.erro_datanasc').css('opacity', '100');
			$('#btncadastro').prop('disabled', true);
			$('#btncadastro').css('cursor', 'not-allowed');
			error_cont++;
		}
			//verifica se o mes é maior que 12 ou menor ou igual a zero
		else if ($('#txtmes').val() > 12 || $('#txtmes').val() <= 0) {
			$('.erro_datanasc').css('opacity', '100');
			$('#btncadastro').prop('disabled', true);
			$('#btncadastro').css('cursor', 'not-allowed');
			error_cont++;
		}
		
		//VALIDA OS MESES COM 31 DIAS
			//verifica se o campo é um mes q possui 31 dias
		else if ($('#txtmes').val() == 1 ||
				$('#txtmes').val() == 3 ||
				$('#txtmes').val() == 5 ||
				$('#txtmes').val() == 7 ||
				$('#txtmes').val() == 8 ||
				$('#txtmes').val() == 10||
				$('#txtmes').val() == 12) {
				//verifica se o campo dia é maior que 31
				if ($('#txtdia').val() > 31 ) {
					$('.erro_datanasc').css('opacity', '100');
					$('#btncadastro').prop('disabled', true);
					$('#btncadastro').css('cursor', 'not-allowed');					
					error_cont++;
				}else{
					$('.erro_datanasc').css('opacity', '0');
					$('#btncadastro').prop('disabled', false);
					$('#btncadastro').css('cursor', 'default');
					error_cont--;
				}
			}
		//VALIDA OS MESES COM 30 DIAS
			//verifica se o campo é um mes q possui 30 dias
		else if ($('#txtmes').val() == 4 ||
				$('#txtmes').val() == 6 ||
				$('#txtmes').val() == 9 ||
				$('#txtmes').val() == 11) {
				//verifica se o campo dia é maior que 30
				if ($('#txtdia').val() > 31 ) {
					$('.erro_datanasc').css('opacity', '100');
					$('#btncadastro').prop('disabled', true);
					$('#btncadastro').css('cursor', 'not-allowed');
					error_cont++;
				}else{
					$('.erro_datanasc').css('opacity', '0');
					$('#btncadastro').prop('disabled', false);
				$('#btncadastro').css('cursor', 'default');
					error_cont--;
				}
			}
		//VALIDA MES DE FEVEREIRO
			//verifica se o mes é fevereiro
		else if ($('#txtmes').val()== 2){
				//verifica se o ano é bissexto
				//verifica se o ano é multiplo de 4, nao multiplo de 100 e multiplo de 400
				if (($('#txtano').val() % 4 == 0 && $('#txtano').val() % 100 != 0 ) || ($('#txtano').val() % 400 == 0) ) {
					//verifica se o campo mes é maior q 29
					if ($('#txtdia').val() > 29) {
						//caso seja, exibe a mensagem de erro
						$('.erro_datanasc').css('opacity', '100');
						$('#btncadastro').prop('disabled', true);
						$('#btncadastro').css('cursor', 'not-allowed');
						error_cont++;
					}else{
						$('.erro_datanasc').css('opacity', '0');
						$('#btncadastro').prop('disabled', false);
						$('#btncadastro').css('cursor', 'default');
						error_cont--;
					}
				}
				//ano nao bissexto
				else{
					//verifica se o campo mes é maior q 28
					if ($('#txtdia').val() > 28) {
						//caso seja, exibe a mensagem de erro
						$('.erro_datanasc').css('opacity', '100');
						$('#btncadastro').prop('disabled', true);
						$('#btncadastro').css('cursor', 'not-allowed');
						error_cont++;
					}else{
						$('.erro_datanasc').css('opacity', '0');
						$('#btncadastro').prop('disabled', false);
						$('#btncadastro').css('cursor', 'default');
						error_cont--;
					}
				}
			}else{
				$('.erro_datanasc').css('opacity', '0');
						$('#btncadastro').prop('disabled', false);
						$('#btncadastro').css('cursor', 'default');
						error_cont--;
			}

	});
	//Validação do mes na perca de foco
	$('#txtmes').blur(function(){
		//Estabelece o valor das datas atuais		
			var now= new Date;
			var dia= now.getDate();
			var mes= now.getMonth()+1;
			var ano= now.getFullYear();

		//valida o ano em branco
		if ($(this).val()=="") {
			$('.erro_datanasc').css('opacity', '100');
			$('#btncadastro').prop('disabled', true);
			$('#btncadastro').css('cursor', 'not-allowed');
			error_cont++;
		}
		//VALIDA DATA FUTURA
				
			//verifica se a data é maior que a do dia atual
			//verifica se o dia,mes e ano sao maiores que os atuais
			else if ($('#txtdia').val() > dia && $('#txtmes').val() > mes  && $('#txtano').val() > ano ||
				//verifica se o dia e o mes  sao maiores que os atuais e o ano é o atual
				$('#txtdia').val() > dia && $('#txtmes').val() > mes && $('#txtano').val() == ano ||
				//verifica se o dia é maior que o atual e o mes e ano sao os atuais
				$('#txtdia').val() > dia && $('#txtmes').val() == mes && $('#txtano').val() == ano) {
				//caso seja, exibe a mensagem de erro
				$('.erro_datanasc').css('opacity', '100');
				$('#btncadastro').prop('disabled', true);
				$('#btncadastro').css('cursor', 'not-allowed');
				error_cont++;
			}
			 //valida velhice 
		else if ($("#txtano").val()<=1910) {
			$('.erro_datanasc').css('opacity', '100');
			$('#btncadastro').prop('disabled', true);
			$('#btncadastro').css('cursor', 'not-allowed');
			error_cont++;
		}
		//verifica se o mes é maior que 12 ou menor ou igual a zero
		else if ($(this).val() > 12 || $(this).val() <= 0) {
			$('.erro_datanasc').css('opacity', '100');
			$('#btncadastro').prop('disabled', true);
			$('#btncadastro').css('cursor', 'not-allowed');
			error_cont++;
		}
		//VALIDA OS MESES COM 31 DIAS
			//verifica se o campo é um mes q possui 31 dias
		else if ($('#txtmes').val() == 1 ||
				$('#txtmes').val() == 3 ||
				$('#txtmes').val() == 5 ||
				$('#txtmes').val() == 7 ||
				$('#txtmes').val() == 8 ||
				$('#txtmes').val() == 10||
				$('#txtmes').val() == 12) {
				//verifica se o campo dia é maior que 31
				if ($('#txtdia').val() > 31 ) {
					$('.erro_datanasc').css('opacity', '100');
					$('#btncadastro').prop('disabled', true);
					$('#btncadastro').css('cursor', 'not-allowed');					
					error_cont++;
				}else{
					$('.erro_datanasc').css('opacity', '0');
					$('#btncadastro').prop('disabled', false);
					$('#btncadastro').css('cursor', 'default');
					error_cont--;
				}
			}
		//VALIDA OS MESES COM 30 DIAS
			//verifica se o campo é um mes q possui 30 dias
		else if ($('#txtmes').val() == 4 ||
				$('#txtmes').val() == 6 ||
				$('#txtmes').val() == 9 ||
				$('#txtmes').val() == 11) {
				//verifica se o campo dia é maior que 30
				if ($('#txtdia').val() > 31 ) {
					$('.erro_datanasc').css('opacity', '100');
					$('#btncadastro').prop('disabled', true);
					$('#btncadastro').css('cursor', 'not-allowed');
					error_cont++;
				}else{
					$('.erro_datanasc').css('opacity', '0');
					$('#btncadastro').prop('disabled', false);
				$('#btncadastro').css('cursor', 'default');
					error_cont--;
				}
			}
		//VALIDA MES DE FEVEREIRO
			//verifica se o mes é fevereiro
		else if ($('#txtmes').val()== 2){
				//verifica se o ano é bissexto
				//verifica se o ano é multiplo de 4, nao multiplo de 100 e multiplo de 400
				if (($('#txtano').val() % 4 == 0 && $('#txtano').val() % 100 != 0 ) || ($('#txtano').val() % 400 == 0) ) {
					//verifica se o campo mes é maior q 29
					if ($('#txtdia').val() > 29) {
						//caso seja, exibe a mensagem de erro
						$('.erro_datanasc').css('opacity', '100');
						$('#btncadastro').prop('disabled', true);
						$('#btncadastro').css('cursor', 'not-allowed');
						error_cont++;
					}else{
						$('.erro_datanasc').css('opacity', '0');
						$('#btncadastro').prop('disabled', false);
						$('#btncadastro').css('cursor', 'default');
						error_cont--;
					}
				}
				//ano nao bissexto
				else{
					//verifica se o campo mes é maior q 28
					if ($('#txtdia').val() > 28) {
						//caso seja, exibe a mensagem de erro
						$('.erro_datanasc').css('opacity', '100');
						$('#btncadastro').prop('disabled', true);
						$('#btncadastro').css('cursor', 'not-allowed');
						error_cont++;
					}else{
						$('.erro_datanasc').css('opacity', '0');
						$('#btncadastro').prop('disabled', false);
						$('#btncadastro').css('cursor', 'default');
						error_cont--;
					}
				}
			}else{
				$('.erro_datanasc').css('opacity', '0');
						$('#btncadastro').prop('disabled', false);
						$('#btncadastro').css('cursor', 'default');
						error_cont--;
			}
	
	});
	//validacao no evento blur do campo ano
	$('#txtano').blur(function(){
		//Estabelece o valor das datas atuais		
			var now= new Date;
			var dia= now.getDate();
			var mes= now.getMonth()+1;
			var ano= now.getFullYear();
		

		//valida o ano em branco
		if ($(this).val()=="") {
			$('.erro_datanasc').css('opacity', '100');
			$('#btncadastro').prop('disabled', true);
			$('#btncadastro').css('cursor', 'not-allowed');
			error_cont++;
		} //valida velhice 
		else if ($(this).val()<=1910) {
			$('.erro_datanasc').css('opacity', '100');
			$('#btncadastro').prop('disabled', true);
			$('#btncadastro').css('cursor', 'not-allowed');
			error_cont++;
		}
		//VALIDA DATA FUTURA
				
			//verifica se a data é maior que a do dia atual
			//verifica se o dia,mes e ano sao maiores que os atuais
			else if ($('#txtdia').val() > dia && $('#txtmes').val() > mes  && $('#txtano').val() > ano ||
				//verifica se o dia e o mes  sao maiores que os atuais e o ano é o atual
				$('#txtdia').val() > dia && $('#txtmes').val() > mes && $('#txtano').val() == ano ||
				//verifica se o dia é maior que o atual e o mes e ano sao os atuais
				$('#txtdia').val() > dia && $('#txtmes').val() == mes && $('#txtano').val() == ano) {
				//caso seja, exibe a mensagem de erro
				$('.erro_datanasc').css('opacity', '100');
				$('#btncadastro').prop('disabled', true);
				$('#btncadastro').css('cursor', 'not-allowed');
				error_cont++;
			}
			//verifica se o mes é maior que 12 ou menor ou igual a zero
		else if ($('#txtmes').val() > 12 || $('#txtmes').val() <= 0) {
			$('.erro_datanasc').css('opacity', '100');
			$('#btncadastro').prop('disabled', true);
			$('#btncadastro').css('cursor', 'not-allowed');
			error_cont++;
		}
		
		//VALIDA OS MESES COM 31 DIAS
			//verifica se o campo é um mes q possui 31 dias
		else if ($('#txtmes').val() == 1 ||
				$('#txtmes').val() == 3 ||
				$('#txtmes').val() == 5 ||
				$('#txtmes').val() == 7 ||
				$('#txtmes').val() == 8 ||
				$('#txtmes').val() == 10||
				$('#txtmes').val() == 12) {
				//verifica se o campo dia é maior que 31
				if ($('#txtdia').val() > 31 ) {
					$('.erro_datanasc').css('opacity', '100');
					$('#btncadastro').prop('disabled', true);
					$('#btncadastro').css('cursor', 'not-allowed');					
					error_cont++;
				}else{
					$('.erro_datanasc').css('opacity', '0');
					$('#btncadastro').prop('disabled', false);
					$('#btncadastro').css('cursor', 'default');
					error_cont--;
				}
			}
		//VALIDA OS MESES COM 30 DIAS
			//verifica se o campo é um mes q possui 30 dias
		else if ($('#txtmes').val() == 4 ||
				$('#txtmes').val() == 6 ||
				$('#txtmes').val() == 9 ||
				$('#txtmes').val() == 11) {
				//verifica se o campo dia é maior que 30
				if ($('#txtdia').val() > 31 ) {
					$('.erro_datanasc').css('opacity', '100');
					$('#btncadastro').prop('disabled', true);
					$('#btncadastro').css('cursor', 'not-allowed');
					error_cont++;
				}else{
					$('.erro_datanasc').css('opacity', '0');
					$('#btncadastro').prop('disabled', false);
				$('#btncadastro').css('cursor', 'default');
					error_cont--;
				}
			}
		//VALIDA MES DE FEVEREIRO
			//verifica se o mes é fevereiro
		else if ($('#txtmes').val()== 2){
				//verifica se o ano é bissexto
				//verifica se o ano é multiplo de 4, nao multiplo de 100 e multiplo de 400
				if (($('#txtano').val() % 4 == 0 && $('#txtano').val() % 100 != 0 ) || ($('#txtano').val() % 400 == 0) ) {
					//verifica se o campo mes é maior q 29
					if ($('#txtdia').val() > 29) {
						//caso seja, exibe a mensagem de erro
						$('.erro_datanasc').css('opacity', '100');
						$('#btncadastro').prop('disabled', true);
						$('#btncadastro').css('cursor', 'not-allowed');
						error_cont++;
					}else{
						$('.erro_datanasc').css('opacity', '0');
						$('#btncadastro').prop('disabled', false);
						$('#btncadastro').css('cursor', 'default');
						error_cont--;
					}
				}
				//ano nao bissexto
				else{
					//verifica se o campo mes é maior q 28
					if ($('#txtdia').val() > 28) {
						//caso seja, exibe a mensagem de erro
						$('.erro_datanasc').css('opacity', '100');
						$('#btncadastro').prop('disabled', true);
						$('#btncadastro').css('cursor', 'not-allowed');
						error_cont++;
					}else{
						$('.erro_datanasc').css('opacity', '0');
						$('#btncadastro').prop('disabled', false);
						$('#btncadastro').css('cursor', 'default');
						error_cont--;
					}
				}
			}else{
				$('.erro_datanasc').css('opacity', '0');
						$('#btncadastro').prop('disabled', false);
						$('#btncadastro').css('cursor', 'default');
						error_cont--;
			}

	});
	//----------------------------------------------------------------------------------------</DATA>---------------------------
	//valida o sexo em branco
	$('#ddsexo').blur(function(){
		if ($(this).val()=="") {
			$('.erro_sexo').css('opacity', '100');
			$('#btncadastro').prop('disabled', true);
			$('#btncadastro').css('cursor', 'not-allowed');
			error_cont++;
		}else{
			$('.erro_sexo').css('opacity', '0');
			$('#btncadastro').prop('disabled', false);
			$('#btncadastro').css('cursor', 'default');
			error_cont--;
		}
	});
	//valida o celular em branco
	$('#txtcelular').blur(function(){
		if ($(this).val()=="") {
			$('.erro_cel').css('opacity', '100');
			$('#btncadastro').prop('disabled', true);
			$('#btncadastro').css('cursor', 'not-allowed');
			error_cont++;
		}else{
			$('.erro_cel').css('opacity', '0');
			$('#btncadastro').prop('disabled', false);
			$('#btncadastro').css('cursor', 'default');
			error_cont--;
		}
	});
	//valida o email em branco
	$('#txtemail').blur(function(){
		var filtro =  /^[a-zA-Z0-9][a-zA-Z0-9\._-]+@([a-zA-Z0-9\._-]+\.)[a-zA-Z-0-9]{2,3}/;
		if ($(this).val()=="") {
			$('.erro_email').css('opacity', '100');
			$('#btncadastro').prop('disabled', true);
			$('#btncadastro').css('cursor', 'not-allowed');
			error_cont++;
		}
        else if(filtro.test($('#txtemail').val())){        	
        	$('.erro_email').css('opacity', '0');
			$('#btncadastro').prop('disabled', false);
			$('#btncadastro').css('cursor', 'default');
			error_cont--;
			return true;
        }else{
        	$('.erro_email').css('opacity', '100');
			$('#btncadastro').prop('disabled', true);
			$('#btncadastro').css('cursor', 'not-allowed');
			error_cont++;
			return false;
        }
	});
	//valida a confirmacao de email em branco
	$('#txtconfirmaemail').blur(function(){
		if ($(this).val()=="") {
			$('.erro_confirma_email').css('opacity', '100');
			$('#btncadastro').prop('disabled', true);
			$('#btncadastro').css('cursor', 'not-allowed');
			error_cont++;
		}
		//confere se a confirmacao de email e igual ao email digitado
		else if ($(this).val() != $('#txtemail').val()) {
			$('.erro_confirma_email').css('opacity', '100');
			$('#btncadastro').prop('disabled', true);
			$('#btncadastro').css('cursor', 'not-allowed');
			error_cont++;
		}else{
			$('.erro_confirma_email').css('opacity', '0');
			$('#btncadastro').prop('disabled', false);
			$('#btncadastro').css('cursor', 'default');
			error_cont--;
		}
	});
	//valida a senha em branco
	$('#txtsenha').blur(function(){
		if ($(this).val()=="") {
			$('.erro_senha').css('opacity', '100');
			$('#btncadastro').prop('disabled', true);
			$('#btncadastro').css('cursor', 'not-allowed');
			error_cont++;
		}else{
			$('.erro_senha').css('opacity', '0');
			$('#btncadastro').prop('disabled', false);
			$('#btncadastro').css('cursor', 'default');
			error_cont--;
		}
	});
	//valida a confirmacao de senha em branco
	$('#txtconfirmasenha').blur(function(){
		if ($(this).val()=="") {
			$('.erro_confirma_senha').css('opacity', '100');
			$('#btncadastro').prop('disabled', true);
			$('#btncadastro').css('cursor', 'not-allowed');
			error_cont++;
		}
		//confere se a confirmacao de senha e igual a senha digitada
		else if ($(this).val() != $('#txtsenha').val()) {
			$('.erro_confirma_senha').css('opacity', '100');
			$('#btncadastro').prop('disabled', true);
			$('#btncadastro').css('cursor', 'not-allowed');
			error_cont++;
		}else{
			$('.erro_confirma_senha').css('opacity', '0');
			$('#btncadastro').prop('disabled', false);
			$('#btncadastro').css('cursor', 'default');
			error_cont--;
		}
	});
	//retira os numeros do campo
	$("#txtnome").keyup(function(){
        var $this = $( this );
        $this.val( er_replace( /[^a-z]+/gi,'', $this.val() ) );
    });	
	
	$("#txtsobrenome").keyup(function(){
        var $this = $( this );
        $this.val( er_replace( /[^a-z]+/gi,'', $this.val() ) );
    });

    //retira as letras do campo
    $("#txtdia").keyup(function() {
        var $this = $( this );
        $this.val( er_replace( /[^0-9]+/g,'', $this.val() ) );
    });
    $("#txtmes").keyup(function() {
        var $this = $( this );
        $this.val( er_replace( /[^0-9]+/g,'', $this.val() ) );
    });
    $("#txtano").keyup(function() {
        var $this = $( this );
        $this.val( er_replace( /[^0-9]+/g,'', $this.val() ) );
    });
    $("#txtcelular").keyup(function() {
        var $this = $( this );
        $this.val( er_replace( /[^0-9()]+/g,'', $this.val() ) );     
    });    
        $("#txttelefone").keyup(function() {
        var $this = $( this );
        $this.val( er_replace( /[^0-9()]+/g,'', $this.val() ) );
    });
    
});
function er_replace( pattern, replacement, subject ){
	return subject.replace( pattern, replacement );
}