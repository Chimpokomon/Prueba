function randomtext() {
//esta funcion settea el texto del elemento con id="parrafo1" dependiendo del numero dado por Math.random()  de entre las 3 frases
    var textocualquiera;
    switch (Math.floor(Math.random()*3)) {
        case 0:
            textocualquiera ="esto es color rojo";
            $("#parrafo1").css("color","red");
            break;
        case 1:
        textocualquiera ="esto es color amarillo";
        $("#parrafo1").css("color","yellow");
            break;
        case 2:
        textocualquiera ="esto es color azul";
        $("#parrafo1").css("color","blue");
            break;
        default:
        textocualquiera = 'asd';
            break;
    }
    $("#parrafo1").html(textocualquiera);
}


function funcionapi1() {
//esta funcion esconde el parrafo2 si es que esta visible,y hace una request a una api que retorna imagenes random de perros
    $("#parrafo2").hide();    
    $("#parrafo1").show();
        $.ajax({
            type: "GET",
            url: "https://dog.ceo/api/breeds/image/random",
            dataType: "json",
            success: function (response) {
                $("#parrafo1").html("<h3>imagen random de perros</h3><br><img src='"+response.message+"'>");

            }
        });

}


function funcionapi2(){
// esta funcion esconde el parrafo 1 y muestra  el parrafo2 que muestra la funcionalidad de la 2da api

        $("#parrafo1").hide();    
        $("#parrafo2").show();
}


function acortarUrl() {
//es un urlshortener,usa el valor ingresado en el campo de texto y retorna una shorturl  de bitly

    var acctok = "0e74ea05fd9cdf17998385d351ee3af4364cd36a";
    var endpoint = "https://api-ssl.bitly.com/v4/shorten";
    var miurl = $("#longurl").val();
    var longurl = "{\"long_url\": \""+ miurl +"\"}";

$.ajax({
    type: "POST",
    url: endpoint,
    headers:{
        "Content-Type" :"application/json",
        "Authorization" :"Bearer "+acctok,
    },
    data: longurl ,
    success: function (response) {
        console.log(response.link)
        $("#shorturl").html("success <br><a target=\"_blank\" href=\""+response.link+"\">"+response.link+"</a>");
    },
    error: function (req,status,err){
        console.log(req,status,err)
        $("#shorturl").html("algo salio mal");
    }
    
});
    


/* request con curl,

curl -H 'Authorization: Bearer 0e74ea05fd9cdf17998385d351ee3af4364cd36a' 
              -H 'Content-Type: application/json' 
              
              -X POST 
              
              -d '{"long_url": "https://www.taringa.net"}'
              
              https://api-ssl.bitly.com/v4/shorten
        */


}



$(document).ready(
    function(){randomtext();$("#parrafo2").hide();}    
    );
