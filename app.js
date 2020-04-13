// Modulos
const http = require('http');
const fs = require('fs');
const movies = require('./peliculas');
const totalmovies = require('./peliculas');
const theaters = require('./theaters');
const faqs = require('./preguntas');
const herramientas = require('./herramientas');
// Crear el Servidor
let server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    let listadoEnHTML = null;
    let cantidad = movies.length;
    switch (req.url) {
        case "/":
            let encabezado = herramientas.Principal + movies.TotalMovies;
            let listadoHTML = herramientas.Listado(movies.Movies);
            let footer = herramientas.Pie;
            res.end(encabezado+listadoHTML+footer);
            break;
        case "/en-cartelera":
            res.end();
            break;
        case "/mas-votadas":
            res.end();
            break;
        case "/sucursales":
            res.end();
            break;
        case "/contacto":
            res.end();
            break;
    }
});
// Levantar el servidor
server.listen(3003, 'localhost', () => console.log('Server running in 3003 port'));