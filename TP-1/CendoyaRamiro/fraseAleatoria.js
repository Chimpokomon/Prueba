function numRandom() {
    return Math.random() * (3 - 0) + 0;
  }


document.write()
function frasesRandom(){
    let frasesazar= new Array();

    frasesazar[0]="<h3 id='frase1'>No renuncies a tus sueños, sigue durmiendo </h3>"
    frasesazar[1]="<h3 id='frase2'>La inteligencia me persigue, pero yo soy más rápido</h3>"
    frasesazar[2]="<h3 id='frase3'>No vivas en el pasado, no sueñes sobre el futuro, concentra tu mente en el momento presente </h3>"

let random =(Math.trunc(numRandom()));
    return frasesazar[random];

}

Frases = document.getElementById('Frases');

Frases.innerHTML = frasesRandom();