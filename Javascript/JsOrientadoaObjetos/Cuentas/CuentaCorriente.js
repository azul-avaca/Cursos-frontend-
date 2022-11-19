import { Cuenta } from "./Cuenta.js";

export class CuentaCorriente extends Cuenta{
    
    //Atributo estático -> static (no se lo puede llamar con this)
    static cantCuentas = 0;
    
    constructor (cliente, nro, agencia) {
        //super para llamar a elementos de la clase padre dentro de este método
        super(cliente,nro,agencia,0);
        CuentaCorriente.cantCuentas ++;
    }

    retirar (valor) {
        super.retirar(valor, 5);
    }
}