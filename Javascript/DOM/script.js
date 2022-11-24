import { addTask } from "./components/addTask.js";
import { displayTasks } from "./components/readTasks.js";
const btn = document.querySelector("[data-f-btn]");

 //guaconst btn = document.querySelector("[data-f-btn]");
    
btn.addEventListener ("click", addTask); 
displayTasks();