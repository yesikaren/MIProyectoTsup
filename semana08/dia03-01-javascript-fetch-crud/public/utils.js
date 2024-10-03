import { borrarPelicula, fetchPeliculas } from "./services.js"

export const renderPeliculas = (peliculas = []) => {
  const peliculasList = document.querySelector('.peliculas__list')

  let elementos = ''

  peliculas.forEach(pelicula => {
    elementos += `
      <tr>
        <td>${pelicula.id}</td>
        <td>
          <img
            src="${pelicula.imagen}"
            width="100"
            height="250"
          />
        </td>
        <td>
          <strong>${pelicula.nombre}</strong>
          <div class="fs-small">
            <strong>Release:</strong> ${pelicula.estreno}
          </div>
          <div class="fs-small">
            <strong>Genero:</strong> ${pelicula.generoId}
          </div>
          <div class="fs-small">
            <strong>Resumen:</strong> ${pelicula.resumen}
          </div>
        </td>
        <td>
          <div class="flex gap-0.5">
            <button class="pelicula__edit">✏</button>
            <button class="pelicula__remove" data-id=${pelicula.id}>❌</button>
          </div>        
        </td>
      </tr>
    `
  })

  peliculasList.innerHTML = elementos
  const removerButtons = document.querySelectorAll('.pelicula__remove')
  removerButtons.forEach((button,index)=>{
    button.addEventListener('click',async (event)=>{
      console.log(event.target.dataset.id)
      console.log("presionado"+index)
      const idPelicula = event.target.dataset.id
      const response = borrarPelicula(idPelicula)
      if(response){
        const peliculas = await fetchPeliculas()
    
        renderPeliculas(peliculas)
      }
    })
  })

}