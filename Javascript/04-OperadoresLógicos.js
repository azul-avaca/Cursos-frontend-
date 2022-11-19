//Operadores de comparación:
const ciudadDestino = "Buenos Aires";
const ciudadesArgentina = new Array("Córdoba", "San Juan", "Chubut", "Jujuy");
let valorPasaje = 0;
/*if (ciudadesArgentina.indexOf(ciudadDestino) >= 0) {
    console.log("Pasaje vendido");
} else {
    console.log("Pasaje no vendido");
} */

//Operadores lógicos
//AND: &&
//OR: ||
//NOT: !

//If anidados -> switch
//if (ciudadesArgentina.indexOf(ciudadDestino) >= 0) {
switch (ciudadDestino) {
    case "Córdoba":
        valorPasaje = 2500;
        break;

    case "San Juan":
        valorPasaje = 2000;
        break;

    case "Chubut":
        valorPasaje = 5000;
        break;

    case "Jujuy":
        valorPasaje = 3460;
        break;

    default :
    console.log("No hay pasajes para la ciudad indicada");
    break;

    if (valorPasaje > 0); 
    console.log(`El precio del pasaje es ${valorPasaje}`);
}

    
    
