const btn = document.querySelector("[data-f-btn]");

const createTask = (evento) => {
    evento.preventDefault(); //para que no se refresque la pagina cada vez q sucede el evento
    const input = document.querySelector("[data-f-input]");
    const value = input.value;
    const list = document.querySelector("[data-list]")
    const task = document.createElement("li");
    task.classList.add("card") //para que tenga el estilo de esa clase
    input.value = "" //para que se borre el texto dsp de apretar el boton
    const content = `<div>
            <i class="far fa-check-square icon"></i>
            <span class="task">${value}</span>
        </div>
        <i class="fas fa-trash-alt trashIcon icon"></i>`
    task.innerHTML = content;
    list.appendChild(task); //para que se creen "hijos" y se acumulen
    console.log(content);
} //guarda el contenido de input una vez que el boton es cliqueado y dsp lo muestra//
btn.addEventListener ("click", createTask); 
