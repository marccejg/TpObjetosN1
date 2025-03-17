export class Auto {

    marca: string;
    modelo: string;
    anio: number;
    ascelerar: boolean;
    frenar: boolean;


    constructor(pMarca: string, pModelo: string, pAnio: number, pAscelerar: boolean, pFrenar: boolean) {
        this.marca = pMarca;
        this.modelo = pModelo;
        this.anio = pAnio;
        this.ascelerar = pAscelerar;
        this.frenar = pFrenar;

    };


    estaAscelerando(): void {
        if (this.ascelerar == true) {
            console.log("El auto está Ascelerando ")
        }
        else { console.log("está frenado") }
    };
};
