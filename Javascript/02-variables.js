var nombre = "María";
let edad = 47;
const direccion = "Av. Pueyrredon 85";
console.log(nombre, edad, direccion );

//Alcance de las variables let y var:
//var: alcance a todo el programa
//let: alcance solo al bloque donde está, luego desaparece
{   var apellido = "Perez";
    let nrotelefono = 351664478;
}
console.log(apellido, nrotelefono);


//orden de precedencia operaciones arigméticas:
// ()
// * y /
// + y - 


// Converción de datos:
// parseInt(), pasrseFloat


//Concatenar variables de texto 
let nombreCompleto = `El nombre completo es: ${nombre} ${apellido}`;
console.log(nombreCompleto);