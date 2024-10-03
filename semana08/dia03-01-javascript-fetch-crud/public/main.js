console.log('loquesea')

const fetchPeliculas = async()=>{
  const url = 'http://localhost:3000/peliculas'
  const response = await fetch(url)
   return await response.json()
}
const renderPeliculas = (peliculas = [])=>{
  const peliculasList = document.getElementById('peliculasList')
  let elementos = ''
  peliculas.forEach(pelicula =>{
    elementos+=`
       <tr>
                <td>${pelicula.id}</td>
                <td>
                <img src="${pelicula.imagen}" alt="">
                </td>
                <td>${pelicula.nombre}</td>
                <td>Acciones</td>
              </tr>
    `
  })
  peliculasList.innerHTML=elementos
}
fetchPeliculas()
  .then(peliculas => renderPeliculas(peliculas))