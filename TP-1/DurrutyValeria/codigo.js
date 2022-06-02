// Dinámica de la página

$(document).ready(() =>{
    $('#ini').show();
    $('#prov').hide();
    $('#fer').hide();

    $('#inicio').click(function(){
        $('#ini').show();
        $('#prov').hide();
        $('#fer').hide();
    });
	$('#provincias').click(function(){
        $('#ini').hide();
        $('#prov').show();
        $('#fer').hide();
    });
    $('#feriados').click(function(){
        $('#ini').hide();
        $('#prov').hide();
        $('#fer').show();
    });
});


// Frases aleatorias de la página de inicio

function frasesRandom(){

  var frases=new Array();
  frases[0]="<p id='frase1'>Conviértete en la persona que atraiga los resultados que buscas.<br>Jim Cathcart</p>"
  frases[1]="<p id='frase2'>El éxito no es definitivo. El fracaso no es fatal. Lo que cuenta es el valor para continuar.<br>Winston Churchill</p>"
  frases[2]="<p id='frase3'>Se amable, porque toda persona que conoces està librando una gran batalla.<br>Platón</p>"

  var ind=(Math.floor(Math.random() * (3)));
  return frases[ind];
}

quote = document.getElementById('quote');
quote.innerHTML = frasesRandom();


// API 1 Provincias de la República Argentina

$(document).ready(function() {
	$.ajax({
		url: "https://apis.datos.gob.ar/georef/api/provincias",
		method: "GET",
		dataType: "json",
		success: function(response) {
			provArg(response.provincias);
		},
		error: function(req, status, err) {
			showError();
		}
	});
});

function provArg(provincias) {
	var html = '<ul>';

	for (prov in provincias) {
		html += '<li>' + provincias[prov].nombre + '</li>';
	}

	html += '</ul>';

	$("#prov").html(html);
}

function showError() {
	var html = '<div>Ha ocurrido un error al cargar las provincias.</div>';

	$("#prov").html(html);
}


// API 2 Feriados Nacionales 2022

$(document).ready(function() {
	$.ajax({
		url: "http://nolaborables.com.ar/api/v2/feriados/2022",
		method: "GET",
		dataType: "json",
		success: function(response) {
			diasNoLab(response);
		},
		error: function(req, status, err) {
			showError();
		}
	});
});

function diasNoLab(feriados) {
	var html = '<ul>';

	for (f in feriados) {
		html += '<li>' + feriados[f].dia + '/' + feriados[f].mes + '/2022:  ' + feriados[f].motivo + '  //  Tipo: ' + feriados[f].tipo +
		 '</li>';
	}

	html += '</ul>';

	$("#fer").html(html);
}

function showError() {
	var html = '<div style="color: #F00">Ha ocurrido un error al cargar los feriados.</div>';

	$("#fer").html(html);
}
