let herramientas = {
    Principal: '<h1>Bienvenidos a DH Movies</h1> <h2>El mejor sitio para encontrar las mejores películas, incluso mucho mejor que Netflix, Cuevana y PopCorn.</h2>',
    Secundaria: '<h1>DH Movies</h1></br><h1>En Cartelera</h1>',
    Listado: function (arreglo) {
        let i= 0;
        let maxnum = arreglo.length;
        let peliculasHtml = "";
        let separador = "</br>-----------------------------------</br>";
        let row = arreglo[i];
        for (let i = 0; i < maxnum; i++) {
            let cadaPelicula = "<p>" + arreglo[i].title + "<p> </br> <p>" + arreglo[i].overview + "<p>";
            peliculasHtml = peliculasHtml + cadaPelicula + separador;
        }
        let listadoHTML = "<h3>Listado de películas:</h3></br>" + peliculasHtml;
        return listadoHTML;
    },
    Pie: `<h3>Recordá que podés visitar las siguientes secciones:</h3></br><p>
    <a href="/"> >Home</a><br>
    <a href="/en-cartelera"> >En Cartelera</a><br>
    <a href="/mas-votadas"> >Más Votadas</a><br>
    <a href="/sucursales"> >Sucursales</a><br>
    <a href="/contacto"> >Contacto</a><br>
    <a href="/preguntas-frecuentes"> >Preguntas Frecuentes</a></p>`
}
module.exports = herramientas;