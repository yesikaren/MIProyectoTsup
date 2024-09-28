const characters = document.getElementById("characters");
const words = document.getElementById("words");
const paragraphs = document.getElementById("paragraphs");
const areaTexto = document.getElementById("areaTexto");
areaTexto.addEventListener("keyup", (event) => {
  characters.innerHTML = areaTexto.value.length;
  const parrafos = areaTexto.value.split("\n")
  paragraphs.innerHTML=parrafos.length;
  console.log(parrafos)
  words.innerHTML = parrafos.reduce((acu,elemento)=>acu+elemento.split(" ").length,0);
});
