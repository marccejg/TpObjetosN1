"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var auto_1 = require("./auto");
var primerAuto = new auto_1.Auto("Audi", "A3", 2020, true, false);
var segundoAuto = new auto_1.Auto("Ford", "Fiesta", 2015, false, true);
var tercerAuto = new auto_1.Auto("Chevrolet", "Corsa", 2008, true, false);
var cuartoAuto = new auto_1.Auto("Fiat", "Uno", 1999, true, false);
var estado = segundoAuto.estaAcelerando();
console.log(estado);
