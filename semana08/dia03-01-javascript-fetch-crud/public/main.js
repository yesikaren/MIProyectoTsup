import { renderPeliculas } from "./utils.js"
import { fetchPeliculas } from "./services.js"

const crearPelicula = async (form)=>{
  const url='http://localhost:3000/peliculas'

  const body = JSON.stringify(form)
  const options = {
    method:'POST',
    headers: {
      'Content-Type': "application/json"
    },
    body
  }
  
  const response =await fetch(url,options)
  return await response.json()
}

const peliculasForm = document.getElementById('peliculasForm')
peliculasForm.addEventListener('submit',async event =>{
  event.preventDefault()
  const peliculaForm = document.forms['peliculasForm']
  const nombre = peliculaForm.nombre.value
  const imagen = peliculaForm.imagen.value
  const estreno = peliculaForm.estreno.value
  const genero = peliculaForm.genero.value
  const resumen = peliculaForm.resumen.value

  const nuevaPelicula ={
    nombre,
    imagen,
    estreno,
    generoId:genero,
    resumen
  }
  const response = await crearPelicula(nuevaPelicula)
  if(response){
    const peliculas = await fetchPeliculas()
    
    renderPeliculas(peliculas)

    peliculaForm.reset()
  }
})
fetchPeliculas()
  .then(peliculas => renderPeliculas(peliculas))