function APPI1(){
	$.ajax({
        url: "https://api.bluelytics.com.ar/v2/latest",
        method: "GET",
        dataType: "json",
        success: function(response){
            dolarInfo(response);
        },
        error: function(req, status, err){
            //
        }
    });

};
function dolarInfo(dolar){

    var html = '<h1>Info Dolar Argentina</h1>'
        html += '<h3>Dolar Oficial</h3>'
        html += 'COMPRA: $' + dolar.oficial.value_buy;
        html += '<br>'
        html += 'VENTA: $' + dolar.oficial.value_sell;
		html += '<h3>Dolar Blue</h3>'
		html += 'COMPRA: $' + dolar.blue.value_buy;
        html += '<br>'
        html += 'VENTA: $' + dolar.blue.value_sell;


    $('.api1').html(html);
};



function APPI2(){
	$.ajax({
		url:'https://api.thecatapi.com/v1/images/search',
		method: 'GET',
		success: function(response){
			console.log(response);
	$('.api1').html(`<h1> Los gatos tienen una flexibilidad y agilidad impresionante, pueden saltar desde más de 3 metros de altura</h1> :  <br> <img src='${response[0].url}' height=280px widht=300px/>`);
			
		},
        error: function(req, status, err){
			console.log(req, status, err);
		}

	});
}