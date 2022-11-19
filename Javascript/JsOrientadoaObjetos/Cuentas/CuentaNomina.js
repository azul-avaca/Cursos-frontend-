import { Cuenta } from "./Cuenta.js";

export class CuentaNomina extends Cuenta {
    constructor (cliente,nro,agencia,saldo){
        super(cliente,nro,agencia,saldo);
    }
    retirar(valor) {
        super._retirar(valor, 1);
    }
}