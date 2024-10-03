export const fetchPeliculas = async () => {
  const url = 'http://localhost:3000/peliculas'

  const response = await fetch(url)

  return await response.json()
}

export const borrarPelicula = async (id) => {
  const url = `http://localhost:3000/peliculas/${id}`

  const options = {
    method: 'DELETE'
  }

  const response = await fetch(url, options)

  return await response.json()
}