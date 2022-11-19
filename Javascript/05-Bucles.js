const ciudadesArgentina = new Array("Córdoba", "San Juan", "Chubut", "Jujuy");
const precioCiudades = new Array(2500, 2000, 5000, 3460);
const presupuesto = 2700;
let i = 0;
while (i < ciudadesArgentina.length && precioCiudades[i] < presupuesto) {
    i++;
};
console.log("Podes ir a:" + ciudadesArgentina[i]);