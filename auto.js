"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Auto = void 0;
var Auto = /** @class */ (function () {
    function Auto(pMarca, pModelo, pAnio, pAcelerar, pFrenar) {
        this.marca = pMarca;
        this.modelo = pModelo;
        this.anio = pAnio;
        this.acelerar = pAcelerar;
        this.frenar = pFrenar;
    }
    ;
    Auto.prototype.estaAcelerando = function () {
        if (this.acelerar == true) {
            console.log("El auto está acelerando ");
        }
        else {
            console.log("El auto está frenado");
        }
        return "";
    };
    ;
    return Auto;
}());
exports.Auto = Auto;
;
