// Datos del catálogo de películas
// Cada película tiene: id, título, año de estreno, género, sinopsis e imageUrl del cartel
const peliculas = [
  { id: 1, titulo: "El Exorcista", año: 1973, genero: "terror", imageUrl: "https://image.tmdb.org/t/p/w342/6u1F2BnzZsT4kpX6V1iYmeXQ5iY.jpg", sinopsis: "Una niña es poseída por una entidad demoníaca y su madre busca desesperadamente la ayuda de la Iglesia para salvarla." },
  { id: 2, titulo: "Tiburón", año: 1975, genero: "terror", imageUrl: "https://image.tmdb.org/t/p/w342/tjbLSFwi0I3phZwh8zoHWNfbsEp.jpg", sinopsis: "Un gran tiburón blanco siembra el terror en una pequeña localidad costera durante el verano." },
  { id: 3, titulo: "El Resplandor", año: 1980, genero: "terror", imageUrl: "https://image.tmdb.org/t/p/w342/mm003Mj2e9kJRsrxiVdPn2BSBPh.jpg", sinopsis: "Un escritor acepta el trabajo de vigilante en un hotel aislado y la locura comienza a apoderarse de él." },
  { id: 4, titulo: "It", año: 2017, genero: "terror", imageUrl: "https://image.tmdb.org/t/p/w342/sSrj4lnhrb113DOPEPTaO2jaDk3.jpg", sinopsis: "Un grupo de niños se enfrenta a una criatura sobrenatural que adopta la forma de sus mayores miedos." },
  { id: 5, titulo: "Midsommar", año: 2019, genero: "terror", imageUrl: "https://image.tmdb.org/t/p/w342/sZ6Bjq1VVfiTrALlev0ganz7uka.jpg", sinopsis: "Una pareja viaja a un festival sueco que solo se celebra cada 90 años y que esconde oscuros rituales paganos." },
  { id: 6, titulo: "Terminator", año: 1984, genero: "accion", imageUrl: "https://image.tmdb.org/t/p/w342/9KI49SBnwAOzGcMw1onIki7vd2.jpg", sinopsis: "Una máquina asesina del futuro es enviada al pasado para eliminar a la madre del líder de la resistencia humana." },
  { id: 7, titulo: "Jungla de Cristal", año: 1988, genero: "accion", imageUrl: "https://image.tmdb.org/t/p/w342/iiCFCTOxZgagYo8o4f5QV78UT2G.jpg", sinopsis: "Un policía neoyorquino lucha solo contra un grupo de terroristas que han tomado un rascacielos en Nochebuena." },
  { id: 8, titulo: "Matrix", año: 1999, genero: "accion", imageUrl: "https://image.tmdb.org/t/p/w342/8rT9kG2EYkZpJmYCuTJNnPDEube.jpg", sinopsis: "Un programador descubre que el mundo que conoce no es más que una simulación creada y controlada por máquinas." },
  { id: 9, titulo: "Mad Max: Furia en la Carretera", año: 2015, genero: "accion", imageUrl: "https://image.tmdb.org/t/p/w342/fnY0VRsb31A5RLVCBjuR6EFUlo2.jpg", sinopsis: "En un mundo postapocalíptico, un hombre y una guerrera huyen de un tirano a través de un páramo desértico." },
  { id: 10, titulo: "Top Gun: Maverick", año: 2022, genero: "accion", imageUrl: "https://image.tmdb.org/t/p/w342/AlWpEpQq0RgZIXVHAHZtFhEvRgd.jpg", sinopsis: "El legendario piloto Maverick regresa para entrenar a una nueva generación de élite de la aviación naval de EE.UU." },
  { id: 11, titulo: "Con Faldas y a lo Loco", año: 1959, genero: "comedia", imageUrl: "https://image.tmdb.org/t/p/w342/y2DPBWFMiwVJeBq0vBX9Um8AqOE.jpg", sinopsis: "Dos músicos se disfrazan de mujeres para escapar de la mafia tras presenciar accidentalmente un crimen." },
  { id: 12, titulo: "Los Cazafantasmas", año: 1984, genero: "comedia", imageUrl: "https://image.tmdb.org/t/p/w342/yKUslrHHXHARIL9kFsoKlgItfes.jpg", sinopsis: "Tres parapsicólogos expulsados de la universidad fundan una empresa de caza de fantasmas en Nueva York." },
  { id: 13, titulo: "Solo en Casa", año: 1990, genero: "comedia", imageUrl: "https://image.tmdb.org/t/p/w342/rjc2a9N5pro1xGsSvvnJ1JDXRGm.jpg", sinopsis: "Un niño de ocho años se queda solo en casa por error y debe defender su hogar de dos torpes ladrones." },
  { id: 14, titulo: "El Gran Hotel Budapest", año: 2014, genero: "comedia", imageUrl: "https://image.tmdb.org/t/p/w342/qqwg8WnsFR7uHWvGOoc6S6UUsTi.jpg", sinopsis: "Las excéntricas aventuras del conserje de un famoso hotel europeo y su joven aprendiz en los años treinta." },
  { id: 15, titulo: "Todo a la Vez en Todas Partes", año: 2022, genero: "comedia", imageUrl: "https://image.tmdb.org/t/p/w342/9R1zEZJkIah6GuLwFZWsuygn552.jpg", sinopsis: "Una lavandera chino-americana es arrastrada a una aventura multiversal en la que debe salvar el mundo." },
  { id: 16, titulo: "Pulp Fiction", año: 1994, genero: "thriller", imageUrl: "https://image.tmdb.org/t/p/w342/sjb1KYPp57GhG96Sc6WJDddP3f7.jpg", sinopsis: "Historias entrelazadas de crimen en Los Ángeles narradas de forma no lineal con diálogos memorables." },
  { id: 17, titulo: "Oldboy", año: 2003, genero: "thriller", imageUrl: "https://image.tmdb.org/t/p/w342/45kRW1xgTq3QrZltL9mY9e9iYkH.jpg", sinopsis: "Un hombre es encarcelado durante quince años sin saber por qué y al salir inicia una obsesiva búsqueda de venganza." },
  { id: 18, titulo: "El Padrino", año: 1972, genero: "drama", imageUrl: "https://image.tmdb.org/t/p/w342/dfEQMuZMIcPgC7nt07D9uVQi7Tv.jpg", sinopsis: "La saga de los Corleone, una de las familias más poderosas del crimen organizado en Nueva York." },
  { id: 19, titulo: "Forrest Gump", año: 1994, genero: "drama", imageUrl: "https://image.tmdb.org/t/p/w342/oiqKEhEfxl9knzWXvWecJKN3aj6.jpg", sinopsis: "La increíble vida de un hombre de Alabama con coeficiente intelectual bajo que se cruza con la historia de EE.UU." },
  { id: 20, titulo: "Parásitos", año: 2019, genero: "drama", imageUrl: "https://image.tmdb.org/t/p/w342/zHk9i6yFodI6fJPbY85z9HURNnQ.jpg", sinopsis: "Una familia sin recursos se infiltra poco a poco en la vida de una adinerada familia con consecuencias inesperadas." },
  { id: 21, titulo: "Interstellar", año: 2014, genero: "ciencia-ficcion", imageUrl: "https://image.tmdb.org/t/p/w342/oBvINgU5r10WHvG6VSopCOlWtJP.jpg", sinopsis: "Un grupo de astronautas viaja a través de un agujero de gusano en busca de un nuevo hogar para la humanidad." },
  { id: 22, titulo: "Gravity", año: 2013, genero: "ciencia-ficcion", imageUrl: "https://image.tmdb.org/t/p/w342/3CKbEXrw88LNvBU3baISh1I7JP4.jpg", sinopsis: "Dos astronautas quedan a la deriva en el espacio tras la destrucción de su transbordador espacial." },
];

// Texto visible en las etiquetas de género
const etiquetasGenero = {
  "terror": "Terror",
  "accion": "Acción",
  "comedia": "Comedia",
  "thriller": "Thriller",
  "drama": "Drama",
  "ciencia-ficcion": "Ciencia Ficción",
};

// Crea y devuelve el elemento <article> de una tarjeta de película
function crearTarjetaPelicula(pelicula) {
  const articulo = document.createElement("article");
  articulo.className = "pelicula";

  // La portada solo se renderiza si hay una URL de imagen
  const portadaHTML = pelicula.imageUrl
    ? `<div class="pelicula-portada">
             <img class="pelicula-cartel" src="${pelicula.imageUrl}" loading="lazy" alt="Cartel de ${pelicula.titulo}">
           </div>`
    : "";

  articulo.innerHTML = `
    ${portadaHTML}
    <div class="pelicula-info">
      <span class="pelicula-genero ${pelicula.genero}">${etiquetasGenero[pelicula.genero]}</span>
      <h2 class="pelicula-titulo">${pelicula.titulo}</h2>
      <p class="pelicula-año">${pelicula.año}</p>
      <p class="pelicula-sinopsis">${pelicula.sinopsis}</p>
    </div>
  `;

  return articulo;
}

// Aplica todos los filtros seleccionados

function filtrarPeliculas() {
  const generoSeleccionado = document.getElementById("filtro-genero").value;
  const ordenSeleccionado = document.getElementById("orden-año").value;

  // Filtrar: si se selecciona "todos" se muestran todas las películas
  let resultado = peliculas.filter(function (p) {
    if (generoSeleccionado === "todos") return true;
    return p.genero === generoSeleccionado;
  });

  // Ordenar por año ascendente o descendente
  if (ordenSeleccionado === "asc") {
    resultado.sort(function (a, b) { return a.año - b.año; });
  } else if (ordenSeleccionado === "desc") {
    resultado.sort(function (a, b) { return b.año - a.año; });
  }

  return resultado;
}



// Vacía el catálogo y vuelve a pintarlo con las películas filtradas

function refrescarCatalogo() {
  const catalogo = document.getElementById("catalogo");
  const listaFiltrada = filtrarPeliculas()

  // Limpiar tarjetas anteriores
  catalogo.innerHTML = "";

  // Insertar una tarjeta por cada película del resultado
  listaFiltrada.forEach(function (pelicula) {
    catalogo.appendChild(crearTarjetaPelicula(pelicula));
  });
}


//eventos para actualizar al filtrar
document.getElementById("filtro-genero").addEventListener("change", refrescarCatalogo);
document.getElementById("orden-año").addEventListener("change", refrescarCatalogo);

// Renderizado inicial al cargar la página
refrescarCatalogo();