//Arrays
const ciudadesArgentina = new Array("Córdoba", "San Juan", "Chubut");

//Definición abreviada 
const paises = ["Argentina", "Colombia", "Rusia"];


//Funciones

    //Agregar elementos en el la última posición:
    paises.push("Ecuador");

    //Agregar elementos en la primera posición:
    ciudadesArgentina.unshift("Jujuy");

    //Borrar elementos: posicion, cantidad de elementos, agregar nuevo elemento
    paises.splice(1, 1, "Italia", "Suecia");
console.log(paises, ciudadesArgentina);

    //Borrar el primer elemento:
    ciudadesArgentina.shift();

    //Borrar el último elemento:
    paises.pop();

    //Mostrar un solo elemento de la lista:
console.log(paises[0], ciudadesArgentina[2]);

    //Mostrar la cantidad de elementos en una lista:
    const cantCiudades =ciudadesArgentina.length;
console.log(cantCiudades);

    //Filtrar elementos:
    const paisesFiltrados = paises.filter((e) => e == "Brasil");
console.log(paisesFiltrados)

    //Agregar un separador a los elementos:
console.log(ciudadesArgentina.join(","));

    //Ordenar los elementos:
console.log(paises.sort());

    //Saber la posición de un elemento: 
console.log(paises.indexOf("Italia"));

    //Unificar listas:
const ciudadesypaises = ciudadesArgentina.concat(paises);
console.log(ciudadesypaises);