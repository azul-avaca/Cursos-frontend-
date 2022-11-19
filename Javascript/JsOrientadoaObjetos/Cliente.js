export class Cliente {
    nombre;
    dni;
    #clave;
    constructor(nombre, dni) {
    this.nombre = nombre;
    this.dni = dni;
    this.#clave = "";
    }

    asignarClave (clave) {
        this.#clave = clave;
    }

    autenticable (clave) {
        return clave == this.#clave;
    }

}
