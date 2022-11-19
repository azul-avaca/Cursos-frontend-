//clase abstracta: no se debe acceder a ella directamente, no se debe instanciar (solo extender a sus hijos), ej: no se tiene q crear un objeto en la clase cuenta

export class Cuenta {
    #cliente;
    #saldo;

    constructor (cliente, nro, agencia, saldo) {
        if (this.constructor == Cuenta) {
            throw new Error("No se deben instanciar objetos en la clase Cuenta") 
        }
        //this para llamar a cosas dentro de la clase
        this.#cliente = cliente;
        this.nro = nro;
        this.agencia = agencia;
        this.#saldo = saldo;
    }
      
    depositar(valor) {
        if (valor > 0)
        this.#saldo += valor;
        return this.#saldo
    }
    //para resguardar al método y que no pueda ser utilizado directamente acá
    retirar(valor) {
        throw new Error("Debe implementar el método en la clase correspondiente");
    }

    _retirar(valor, comision) {
        valor = valor * (1+comision/100);
        // Deja retirar solo si la cuenta tiene el dinero necesario  
        if (valor <= this.#saldo)
            this.#saldo -= valor;
        return this.#saldo;
    }
    verSaldo () {
        return this.#saldo;
    }
    //valor es un parámetro primitivo que solo pasa el contenido de la variable valor
    //cuentaDestino hace referencia al objeto cuenta (la variable cuenta y su contenido)
    transferir(valor, cuentaDestino) { 
        this.retirar(valor);
        cuentaDestino.depositar(valor);
    }
}
