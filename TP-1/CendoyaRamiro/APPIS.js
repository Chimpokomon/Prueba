function APPI1(){
	$.ajax({
		url:'https://api.thedogapi.com/v1/images/search',
		method: 'GET',
		success: function(response){
			console.log(response);
	$('.APPIS').html(`La imagen del perro al Azar es :  <br> <img src='${response[0].url}' height=280px widht=300px/>`);
			
		},
        error: function(req, status, err){
			console.log(req, status, err);
		}

	});
}

function APPI2(){
	$.ajax({
		url:'https://foodish-api.herokuapp.com/api/',
		method: 'GET',
		success: function(response){
			console.log(response);
			$(".APPIS").html(` La imagen de la comida al Azar es :  <br> <img src='${response.image}' height=280px widht=300px/>`);
		},
		error: function(req, status, err){
			console.log(req, status, err);
		}
	});
};