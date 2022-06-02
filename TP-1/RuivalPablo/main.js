const d = document;

let frase =['La etiqueta form es una etiqueta semántica, indica al navegador web, que las etiquetas HTML que se encuentran adentro son de tipo formulario, y que captará información que debe ir hacia una base de datos de nuestra aplicación. La forma correcta de escribir esta etiqueta es: <form></form>.','La etiqueta en HTML <nav> es simplemente un contenedor de enlaces de navegación. Esta etiqueta te permite dirigirte a otras secciones o a enlaces externos. Es muy útil en la organización del contenido de la página.','Sirve para crear secciones o agrupar contenidos. Sus etiquetas son: <div> y </div> (ambas obligatorias). Está definido como: Elemento en bloque. Crea una caja: En bloque. Puede contener: Texto, y/o cero o más elementos en bloque o en linea']

let num = Math.random().toFixed(4)
console.log(num)

if((num >= 0) && (num <= 0.4)){
    let f1 = d.getElementById('p1')
    f1.innerText = frase[0]
}else if((num > 0.4) && (num <= 0.8)){
    let f2 = d.getElementById('p2')
    f2.innerText = frase[1]
}else{
    let f3 = d.getElementById('p3')
    f3.innerText = frase[2]
}

function api1() {
  
    $.ajax({
     
   url: 'https://zoo-animal-api.herokuapp.com/animals/rand/',
   type :"GET",
     
   }).done (function(data) {
      $('#respuestaHtml1').html(JSON.stringify(data));
     
   }).fail(function(data) {
     
   alert('error')
     
    }).always(function(data) {
     
   alert('complete')
     
    });
   
   };


function api2(){
    
        $.ajax({
        url: 'https://api.dictionaryapi.dev/api/v2/entries/en/hello',
        type :"GET",
        })

        .done(function(data) {
         $('#respuestaHtml2').html(JSON.stringify(data));
        })

        .fail(function(data) {
           alert('error')
        })

        .always(function(data) {
           alert('complete')
        })
}



