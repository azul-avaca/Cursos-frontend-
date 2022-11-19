export class Autenticacion {
    //Método <autenticable>: interfaz (comunicación) entre las clases
    static login(usuario,clave) {
    // si autenticable es una funcion y está dentro de usuario, revisa la clave
        if("autenticable" in usuario 
            && usuario.autenticable instanceof Function)
            return usuario.autenticable(clave);
        else 
            return false;
    }
}
//Polimorfismo: métodos, o atributos con el mismo nombre que pueden tener distintas acciones programadas