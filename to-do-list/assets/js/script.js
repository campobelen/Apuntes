/*ESTA FORMA ES PEOR, MÁS LARGA, MÁS COSTE, VARIABLES DENTRO DE LA FUNCIÓN...
* MEJOR USAR LINEAS DESDE 17 a 28!!
* Para tener acceso a todo desde fuera de la función. 

var btnAddtask = document.getElementById("add-task-btn"); 
btnAddtask.addEventListener('click', addTask); 

function addTask() {
    let taskDiv = document.createElement("div"); 
    taskDiv.className = "task"; 
    let input_val = document.getElementById("add-task-input").value;
    taskDiv.innerText = input_val;
    document.getElementById("add-task-input").value = ''; 
    document.getElementById("to-do-container").appendChild(taskDiv);
}
*/

var btnAddtask = document.getElementById("add-task-btn"); //creamos la variable para no hacer "on click" y poner añadir con ENTER
var input = document.getElementById("add-task-input");
var toDoContainer = document.getElementById("to-do-container");
var doneContainer = document.getElementById("done-container");
btnAddtask.addEventListener('click', addTask); //le decimos que escuche y al hacer click se vincule a la función adTask
input.addEventListener('keypress', handleAddTask);

function handleAddTask(event){
    if (event.key === "Enter" && input.value != ""){
        event.preventDefault();
        addTask();
    }
}

function addTask() {
    if (input.value.length > 0){
    let taskDiv = document.createElement("div"); //creamos un nuevo div con la tarea al añadirla
    taskDiv.className = "task"; //añade al nuevo div al referencia de clase para que coja el estilo del css
    let mark = createMarkAsDoneIcon();
    taskDiv.appendChild(mark);
    mark.addEventListener("click", function(){
        this.classList.toggle("hidden")
        doneContainer.appendChild(this.parentNode);//this significa el conjunto entero, nos muestra en este caso el icono, pero al añadir "parent-node" nos indica su padre de donde cuelga
        this.parentNode.children[1].classList.toggle("hidden");
    })
    let unmark = createMarkAsToDoIcon()
    taskDiv.appendChild(unmark);
    unmark.addEventListener('click', function(){
        this.classList.toggle("hidden")
        toDoContainer.appendChild(this.parentNode);
        this.parentNode.children[0].classList.toggle("hidden");
    })
    taskDiv.appendChild(createTaskName(input.value));
    let erase = createTrashIcon();
    taskDiv.appendChild(erase);
    erase.addEventListener('click', function(){
        this.parentNode.remove();
    })
    input.value = ''; //resetea el texto introducido en el input una vez que ya se creó la tarea
    toDoContainer.appendChild(taskDiv)
    }
}

function createMarkAsDoneIcon(){
    let span = document.createElement("span");
    span.className = "material-symbols-outlined mark-as-done";
    span.innerText = "radio_button_unchecked";
    return span
}

function createMarkAsToDoIcon() {
    let span = document.createElement("span");
    span.className = "material-symbols-outlined mark-as-to-do hidden"
    span.innerText = "check_circle";
    return span
}

function createTaskName(taskName) {
    let span = document.createElement("span");
    span.className = "task_name";
    span.innerText = taskName;
    return span;
}

function createTrashIcon() {
    let span = document.createElement("span");
    span.className = "material-symbols-outlined trash";
    span.innerText = "delete";
    return span;
}