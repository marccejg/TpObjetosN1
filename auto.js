"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Auto = void 0;
var Auto = /** @class */ (function () {
    function Auto(pMarca, pModelo, pAnio, pAscelerar, pFrenar) {
        this.marca = pMarca;
        this.modelo = pModelo;
        this.anio = pAnio;
        this.ascelerar = pAscelerar;
        this.frenar = pFrenar;
    }
    ;
    Auto.prototype.estaAscelerando = function (asc) {
        if (this.ascelerar == true) {
            console.log("El auto está Ascelerando ");
        }
        ;
    };
    ;
    return Auto;
}());
exports.Auto = Auto;
;
