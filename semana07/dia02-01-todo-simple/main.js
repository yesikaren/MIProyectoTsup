const taskInput = document.querySelector(".task__input");
const taskAdd = document.querySelector(".task__add");
const taskList = document.querySelector(".task__list");
taskAdd.addEventListener("click", (event) => {
  if(taskInput.value.trim()===''){
    alert('El campo es requerido, ingresa una tarea')
    return
  }
  const li = document.createElement('li')
  let checkbox =document.createElement('input')
  checkbox.setAttribute('type', 'checkbox')
  li.appendChild(checkbox)

  let span = document.createElement('span')
  span.textContent = taskInput.value
  li.appendChild(span)

  let boton = document.createElement('button')
  boton.textContent = 'borrar'
  li.appendChild(boton)
  //li.textContent = taskInput.value
  taskList.appendChild(li)
  taskInput.value = ''
});
taskList.addEventListener('click',(event)=>{
  /**  @type {HTMLInputElement} */
  const target = event.target
  console.log(target.tagName)
  if(target.tagName=== 'BUTTON'){
    target.parentElement.remove()
  }

  if(target.tagName === 'INPUT' && target.type ==='checkbox'){
    target.classList.toggle('checkbox')
  }
})
