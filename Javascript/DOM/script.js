( () => {
const btn = document.querySelector("[data-f-btn]");
 
const createTask = (evento) => {
    evento.preventDefault();
    const input = document.querySelector("[data-f-input]");
    const value = input.value;
    const list = document.querySelector("[data-list]")
    const task = document.createElement("li");
    task.classList.add("card") 
    input.value = "" //para que se borre el texto dsp de apretar el boton
    const taskContent = document.createElement("div");
    const titleTask = document.createElement("span");
    titleTask.classList.add("task");
    titleTask.innerText = value;
    taskContent.appendChild(checkComplete());
    taskContent.appendChild(titleTask);
    const content = `
        <i class="fas fa-trash-alt trashIcon icon"></i>`
    task.appendChild(taskContent);
    list.appendChild(task); 

} //guarda el contenido de input una vez que el boton es cliqueado y dsp lo muestra//
btn.addEventListener ("click", createTask); 

const checkComplete = () => {
    const i = document.createElement("i");
    i.classList.add("far", "fa-check-square", "icon");
    i.addEventListener("click", completeTask);
    return i;
}

const completeTask = (event) => {
    console.log(event.target);
    const element = event.target;
    element.classList.toggle("fas");
    element.classList.toggle("completeIcon");
    element.classList.toggle("far");
}
})()