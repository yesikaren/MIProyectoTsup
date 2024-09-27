const url = 'https://jsonplaceholder.typicode.com/posts--'
const fetchPosts1 = async ()=>{
  const response = await fetch(url)
  const json = await response.json()
  console.log(json)

}
const fetchPosts2 = async ()=>{
  try{

    const response = await fetch(url)
    if(!response.ok) {
      console.log("hubo un error")
      throw new Error(`Error HTTP ${response.status}`)
    }
    return await response.json()
  }
  catch(error){
    console.log(error)
  }
}

// fetchPosts1()
fetchPosts2()
  .then(res=>console.log(res))