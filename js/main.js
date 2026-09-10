// Datos del catálogo de películas
// Cada película tiene: id, título, año de estreno, género y sinopsis
const peliculas = [
    { id: 1, titulo: "El Exorcista", año: 1973, genero: "terror", sinopsis: "Una niña es poseída por una entidad demoníaca y su madre busca desesperadamente la ayuda de la Iglesia para salvarla." },
    { id: 2, titulo: "Tiburón", año: 1975, genero: "terror", sinopsis: "Un gran tiburón blanco siembra el terror en una pequeña localidad costera durante el verano." },
    { id: 3, titulo: "El Resplandor", año: 1980, genero: "terror", sinopsis: "Un escritor acepta el trabajo de vigilante en un hotel aislado y la locura comienza a apoderarse de él." },
];

// Crea y devuelve el elemento <article> de una tarjeta de película
function crearTarjetaPelicula(pelicula) {
    const articulo = document.createElement("article");
    articulo.className = "pelicula";

    articulo.innerHTML = `
    <div class="pelicula-info">
      <h2 class="pelicula-titulo">${pelicula.titulo}</h2>
      <p class="pelicula-año">${pelicula.año}</p>
      <p class="pelicula-sinopsis">${pelicula.sinopsis}</p>
    </div>
  `;

    return articulo;
}





// Vacía el catálogo y vuelve a pintarlo con las películas filtradas

function refrescarCatalogo() {
    const catalogo = document.getElementById("catalogo");

    // Limpiar tarjetas anteriores
    catalogo.innerHTML = "";

    // Insertar una tarjeta por cada película del resultado
    peliculas.forEach(function (pelicula) {
        catalogo.appendChild(crearTarjetaPelicula(pelicula));
    });
}

// Renderizado inicial al cargar la página
refrescarCatalogo();
