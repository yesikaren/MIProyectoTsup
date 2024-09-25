// TODO: Al hacer click en los botones - y + decremente o incremente la cantidad.
const aumentar = document.querySelector(".aumentar");
const disminuir = document.querySelector(".disminuir");
const cantidad = document.querySelector(".cantidad");

aumentar.addEventListener("click", () => {
  cantidad.innerHTML = Number(cantidad.innerHTML) + 1;
  //alert(cantidad.innerHTML)
});
disminuir.addEventListener("click", () => {
  if (Number(cantidad.innerHTML) > 0){
    cantidad.innerHTML = Number(cantidad.innerHTML) - 1;
  }
});
