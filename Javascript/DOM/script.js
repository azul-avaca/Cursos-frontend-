import checkComplete from "./components/checkComplete.js";
import deleteIcon from "./components/deleteIcon.js";
const btn = document.querySelector("[data-f-btn]");

const createTask = (evento) => {
    evento.preventDefault();
    const input = document.querySelector("[data-f-input]")
    const value = input.value;
    const list = document.querySelector("[data-list]");
    const task = document.createElement("li");
    task.classList.add("card") ;
    input.value = ""; //para que se borre el texto dsp de apretar el boton
    const taskContent = document.createElement("div");
    const titleTask = document.createElement("span");
    titleTask.classList.add("task");
    titleTask.innerText = value;
    taskContent.appendChild(checkComplete());
    taskContent.appendChild(titleTask);
    task.appendChild(taskContent);
    task.appendChild(deleteIcon());
    list.appendChild(task); 

} //guaconst btn = document.querySelector("[data-f-btn]");
    
btn.addEventListener ("click", createTask); 