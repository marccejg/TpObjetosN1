export class Auto {

    marca: string;
    modelo: string;
    anio: number;
    acelerar: boolean;
    frenar: boolean;


    constructor(pMarca: string, pModelo: string, pAnio: number, pAcelerar: boolean, pFrenar: boolean) {
        this.marca = pMarca;
        this.modelo = pModelo;
        this.anio = pAnio;
        this.acelerar = pAcelerar;
        this.frenar = pFrenar;

    };

    estaAcelerando(): string {
        if (this.acelerar == true) {
           console.log("El auto está acelerando ")

        }
        else { console.log("El auto está frenado") }

        return "";

};}
