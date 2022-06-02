const express = require("express");
const bodyParser = require('body-parser');
const axios = require('axios');
const app = express();
var path = require('path');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var token = '';
app.listen(80, () => {
});

//var BASE_URL = 'http://strapi:1337';
var BASE_URL = 'https://gestionweb.frlp.utn.edu.ar/api';

app.get('/', function(req, res) {
    axios.post(BASE_URL + '/auth/local', {
            identifier: 'api-user@example.com',
            password: '123456'
        })
        .then(response => {
            token = response.data.jwt;

            res.sendFile(path.join(__dirname + '/index.html'));
        })
        .catch(error => {
            res.send('Error al obtener el token. Intente nuevamente.');
        });
});

app.get('/app.js', function(req, res) {
    res.sendFile(path.join(__dirname + '/app.js'));
});

app.get('/carreras', function(req, res) {
    axios.get(BASE_URL + '/carreras', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(response => {
            res.send(response.data);
        })
        .catch(error => {
            console.log(error);
        });
});
app.post('/carreras', function(req, res) {
    let data = {
        nombre: req.body.nombre
    };

    axios.post(BASE_URL + '/carreras', { data: data }, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(response => {
            res.send(response.data);
        })
        .catch(error => {
            console.log(error);
        });
});
app.delete('/carreras/:id', function(req, res) {
    axios.delete(BASE_URL + '/carreras/' + req.params.id, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(response => {
            res.send(response.data);
        })
        .catch(error => {
            console.log(error);
        });
});

app.get('/materias', function(req, res) {
    axios.get(BASE_URL + '/materias?populate=*', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(response => {
            res.send(response.data);
        })
        .catch(error => {
            console.log(error);
        });
});
app.post('/materias', function(req, res) {
    let data = {
        nombre: req.body.nombre,
        carrera: req.body.carrera
    };

    axios.post(BASE_URL + '/materias', { data: data }, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(response => {
            res.send(response.data);
        });
});
app.put('/materias/:id', function(req, res) {
    let data = {
        alumnos: req.body.alumnos
    };
    axios.put(BASE_URL + '/materias/' + req.params.id, { data: data }, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(response => {
            res.send(response.data);
        });
});
app.delete('/materias/:id', function(req, res) {
    axios.delete(BASE_URL + '/materias/' + req.params.id, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(response => {
            res.send(response.data);
        })
        .catch(error => {
            console.log(error);
        });
});

app.get('/alumnos', function(req, res) {
    axios.get(BASE_URL + '/alumnos', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(response => {
            res.send(response.data);
        })
        .catch(error => {
            console.log(error);
        });
});
app.post('/alumnos', function(req, res) {
    let data = {
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        legajo: req.body.legajo
    };

    axios.post(BASE_URL + '/alumnos', { data: data }, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(response => {
            res.send(response.data);
        })
        .catch(error => {
            console.log(error);
        });
});
app.delete('/alumnos/:id', function(req, res) {
    axios.delete(BASE_URL + '/alumnos/' + req.params.id, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(response => {
            res.send(response.data);
        })
        .catch(error => {
            console.log(error);
        });
});
