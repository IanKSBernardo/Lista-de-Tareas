const tareaInput = document.querySelector('.tarea-input');
const tareaButton = document.querySelector('.tarea-button');
const taskListContainer = document.getElementById('taskListContainer');

let listaTareas = [];

function mostrarTarea() {
    taskListContainer.innerHTML = "";

    listaTareas.forEach(tarea => {
        let tareaContainer = document.createElement('div');
        tareaContainer.classList.add('task-item');

        let taskName = document.createElement('span');
        tareaContainer.appendChild(taskName);
        taskName.classList.add('task-name');
        taskName.textContent = tarea;
        taskName.setAttribute('contenteditable', 'true');

        let taskCheck = document.createElement('input');
        tareaContainer.appendChild(taskCheck);
        taskCheck.setAttribute('type', 'checkbox');
        taskCheck.classList.add('task-check');
        taskCheck.addEventListener('click', (e)=>{
            e.preventDefault;
            if(taskName.style.textDecoration !== "line-through"){
                taskName.style.textDecoration = "line-through";
                taskName.style.color = "#733";
            }
            else{
                taskName.style.textDecoration = "none";
                taskName.style.color = "#000";
            }
        });

        let taskRemove = document.createElement('span');
        tareaContainer.appendChild(taskRemove);
        taskRemove.classList.add('task-remove'); 
        taskRemove.classList.add('material-symbols-outlined');
        taskRemove.textContent = "delete"; 
        taskRemove.addEventListener('click', () => {
            listaTareas = listaTareas.filter(t => t !== tarea);
            mostrarTarea();
        });

        taskListContainer.appendChild(tareaContainer);
    });
};

function agregarTarea() {
    const nombreTarea = tareaInput.value;
    if (nombreTarea !== "") {
        listaTareas.push(nombreTarea);
        mostrarTarea();
        tareaInput.value = "";
    } else {
        alert('Escribir el nombre de la tarea');
    }
};

tareaButton.addEventListener('click', (e) => {
    e.preventDefault();
    agregarTarea();
});

tareaInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        e.preventDefault();
        agregarTarea();
    }
});