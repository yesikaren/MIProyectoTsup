let page = 1;
let count = 0;
const LIMIT = 9;
let totalPages=0
const fetchPokemons = async (page = 1) => {
  
  const OFFSET = (page - 1) * LIMIT;
  const url = `https://pokeapi.co/api/v2/pokemon/?offset=${OFFSET}&limit=${LIMIT}`;
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  return data;
};

const renderPokemons = (pokemons = []) => {
  const pokemonsList = document.getElementById("pokemonList");
  let elements = "";
  pokemons.forEach((pokemon) => {
    elements += `<h2>${pokemon.name}</h2>`;
  });
  pokemonsList.innerHTML = elements;
  totalPages = Math.ceil(count/LIMIT)
  elCurrentPage.textContent = `${page} de ${totalPages}`;

};


const elPrevPage = document.querySelector("#prevPage");
const elCurrentPage = document.querySelector("#currentPage");
const elNextPage = document.querySelector("#nextPage");

elNextPage.addEventListener("click", async () => {
  if(page>=totalPages) return
  page++;
  const dataPokemons = await fetchPokemons(page);
  renderPokemons(dataPokemons.results);
});
elPrevPage.addEventListener("click", async () => {
  if (page < 2) return;
  page--;
  const dataPokemons = await fetchPokemons(page);
  renderPokemons(dataPokemons.results);
});
fetchPokemons(page).then((pokemons) => {
  count = pokemons.count
  renderPokemons(pokemons.results)
});
