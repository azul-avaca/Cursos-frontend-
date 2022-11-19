//Importar clases 
import { Cliente } from "./Cliente.js";
import { Empleado } from "./Empleados/Empleado.js";
import { Gerente } from "./Empleados/Gerente.js";
import { Director } from "./Empleados/Director.js";
import { Autenticacion } from "./Aunteticacion.js";
 
//const para crear objetos
const cliente1 = new Cliente("Clara", 25496244);
cliente1.asignarClave("13432");
console.log(Autenticacion.login(cliente1, "13432"));
const cliente2 = new Cliente("Ramón", 34593465);

const empleado1 = new Empleado("Sara Díaz", 36843692, 200000);
empleado1.asignarClave("12453");
const gerente1 = new Gerente("Juan Carlos", 26368426, 150000);
const director1 = new Director("Mirta Suarez", 26374385, 47000);

console.log(Autenticacion.login(empleado1, "12453"));
