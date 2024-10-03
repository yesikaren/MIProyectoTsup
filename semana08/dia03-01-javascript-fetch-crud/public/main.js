import { renderPeliculas } from "./utils.js"
import { fetchPeliculas } from "./services.js"

fetchPeliculas()
  .then(peliculas => renderPeliculas(peliculas))