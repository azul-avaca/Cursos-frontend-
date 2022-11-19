import { Cuenta } from "./Cuenta.js";

export class CuentaAhorro extends Cuenta {
    constructor (cliente, nro, agencia,saldo) {
        //super para llamar a elementos de la clase padre dentro de este método
        super(cliente,nro,agencia,saldo);
        
    }

    retirar(valor) {
        super._retirar(valor, 2);
    }

}