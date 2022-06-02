    var aleatorio = (Math.random() * (3 - 1) + 1).toFixed();

    $(document).ready(function frasesAleatorias() {
        
        if (aleatorio==1){
            document.getElementById("frases-aleatorias").innerHTML =
            'Si afuera tienes miedo, encierrate en tu pokecasa';
            document.querySelector("#frases-aleatorias").style.textShadow = "-2px 2px green";
        } 
        
        if (aleatorio==2){
            document.getElementById("frases-aleatorias").innerHTML =
            'Tanto vertigo es la vida, no hay mas que hacer solo subirla';
            document.querySelector("#frases-aleatorias").style.textShadow = "-2px 2px blue";
        } 
        
        if (aleatorio==3){
            document.getElementById("frases-aleatorias").innerHTML =
            'Hakuna Matata, nada que temer';
            document.querySelector("#frases-aleatorias").style.textShadow = "-2px 2px red";
        }
        
    });

    function numRandom() {
        return Math.random() * (3 - 0) + 0;
      }
    let random =(Math.trunc(numRandom()));



    function API1(){
        var aleatorio = (Math.random() * (50- 4) + 4);
        $.ajax({
            url : `https://pokeapi.co/api/v2/pokemon/${Math.trunc(aleatorio)}`,  //`
            method: "GET",
            dataType: "json",
            success:function(response) {
    
                pokemon(response);
            },
    
            error: function(req, status, err) {
    
               console.log(req, status, err)
            },
    
        });
    
    }
    
    function pokemon(response){
        var html="<img" + " width=300px"+" src=" + response.sprites.front_default + ">" + "<br>";
        html+= "<h3>" + "Nombre: " + response.name + "</h3>" ;
        html+= "<h3>" + "Altura: "+ response.height/10 + "metros" + "</h3>";
        html+= "<h3>" + "Experiencia base: " +response.base_experience +"</h3>";
        $("#API").html(html);
    }





function API2(){

    $.ajax({

        url : "https://api.thedogapi.com/v1/images/search",
        method: "GET",
        dataType: "json",
        success:function(response) {

            perros(response);
        },

        error: function(req, status, err) {

           console.log(req, status, err)
        },

    });

}

function perros(response){

    var html = "<img" + " width=800px"+" src=" + response[0].url + ">" ;

    $("#API").html(html);
}

