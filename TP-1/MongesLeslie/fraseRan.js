function frases(){
    let frases=new Array();
    frases[0]="<h1 id='f1'> El exito llega para todos aquellos que estan ocupados buscandolo.</h1>"
    frases[1]="<h1 id='f2'> EL   UNICO   MODO   DE   HACER   UN   GRAN   TRABAJO   ES   AMAR   LO   QUE   HACES.</h1>"
    frases[2]="<h1 id='f3'> La vida te pondra obstaculos pero los limites los pones tu.</h1>"
    let indice=(Math.floor(Math.random()*(3)));
    return frases[indice];
}
variable = document.getElementById('variable');
variable.innerHTML = frases();

