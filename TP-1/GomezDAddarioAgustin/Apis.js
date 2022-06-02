/*function activarApi1(){
    const aplicacion = document.querySelector('.principal')
    const url2 = 'https://jsonplaceholder.typicode.com/users'
    const ul = document.createElement('div')

    fetch(url2)
    .then(res => res.json())
    .then(data => {
        data.forEach(user => {
            const p = document.createElement('p')
            p.innerHTML = user.name
            ul.appendChild(p)
        });
    })
    .catch(err => console.log(err))
}*/

function activarApi2(){
    document.querySelector('#boton2')
    let url = `https://mindicador.cl/api/dolar`
    const api = new XMLHttpRequest();
    api.open('GET', url, true);
    api.send();
    
    api.onreadystatechange = function(){
        if(this.status == 200 && this.readyState == 4){
            let datos = JSON.parse(this.responseText);
            console.log(datos.serie);
            let resultado = document.querySelector('#resultado');
            resultado.innerHTML = '';
            let i = 0;
            for(let item of datos.serie){
                while(i<10){
                resultado.innerHTML += `<li>${item.fecha.substr(0,10)} --> $ ${item.valor}</li>`
                i++
                }
            }
        }
    }
}

function activarApi1(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(dato => mostrarInfo(dato))

    const mostrarInfo = (dato) => {
            let data = ''
            for(i = 1; i < 10; i++){
                data+= `<li>${dato[i].name}, ${dato[i].username}</li>`
            }
            document.getElementById('resultado').innerHTML = data
        }
    }

