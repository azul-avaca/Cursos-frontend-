const btn = document.querySelector("[data-f-btn]");

const createTask = (evento) => {
    evento.preventDefault();
    const input = document.querySelector("[data-f-input]");
    console.log(input.value);
} //guarda el contenido de input una vez que el boton es cliqueado y dsp lo muestra//
btn.addEventListener ("click", createTask); 
