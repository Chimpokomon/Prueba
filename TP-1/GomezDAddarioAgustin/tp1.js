frase = new Array();
frase[0] = "Estoy realizando este trabajo en el mes de Mayo"; 
frase[1] = "Actualmente estoy cursando el tercer año de Ingeniería en Sistemas de la Información"; 
frase[2] = "La fecha de Entrega de este Trabajo Práctico es el 3/05/2022";
random = Math.random() * (frase.length);
random = Math.floor(random);
document.write(frase[random]);
var css = new Array('estilo1','estilo2','estilo3');
var i = Math.floor(Math.random()*css.length);
var textoRandom = document.getElementById('textoRandom');
textoRandom.className = css[i];

