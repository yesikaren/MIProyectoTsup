/**  @type {HTMLInputElement} */
const taskInput = document.querySelector(".task__input");
const taskClear = document.querySelector(".task__clear");
const taskList = document.querySelector(".task__list");
localStorage.setItem('fruta','manzanas')
let tasks = [
  /* {
    title: "Estudiar Javascripttt",
    completed: true,
  },
  {
    title: "Salir al receso a las 9 pm",
    completed: true,
  },
  {
    title: "Realizar el reto del fin de semana",
    completed: false,
  }, */
];

taskClear.addEventListener("click", (event) => {
  console.log("removiendo");
  const newTasks = tasks.filter((task) => !task.completed);
  tasks = newTasks;
  renderTask();
});

taskInput.addEventListener("keydown", (event) => {
  const value = event.target.value;
  if (event.key === "Enter") {
    console.log("Agregando una nueva tarea", value);
    const newTask = {
      title: value,
      completed: false,
    };
    tasks.push(newTask);
    console.log(tasks);
    taskInput.value = "";
    renderTask();
  }
});
function renderTask() {
  let lista = "";
  if (tasks.length == 0) {
    taskList.innerHTML = `<li class="bg-yellow-100 text-yellow-800 text-sm p-4 rounded-lg text-center font-medium border border-yellow-300">
           No hay tareas
          </li>`;
    return;
  }
  tasks.forEach((task, index) => {
    lista =
      lista +
      ` <li class="flex justify-center items-center gap-4 py-1">
            <input type="checkbox" onchange="checkTask(${index})" 
            ${task.completed ? "checked" : ""} />
            <div class="w-full  ${task.completed ? "line-through" : ""}">${
        task.title
      }</div>
            <button class="border border-red-700 font-medium text-sm p-1 px-3 text-red-900 hover:bg-red-700 hover:text-white rounded-lg duration-300" onclick="removeTask(${index})">Borrar</button>
          </li>`;
    console.log(task);
  });
  taskList.innerHTML = lista;
}

function removeTask(selectedIndex) {
  //tasks.splice(selectedIndex, 1);
  const newTasks = tasks.filter((task, index) => index !== selectedIndex);
  tasks = newTasks;
  renderTask();
}

function checkTask(selectedIndex) {
  // console.log('completando tarea...', selectedIndex)
  const taskSelected = tasks[selectedIndex];

  tasks[selectedIndex] = !taskSelected.completed;
  renderTask();
}
renderTask();
