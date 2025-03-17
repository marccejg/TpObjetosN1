import { Auto } from "./auto";

let primerAuto = new Auto("Audi", "A3", 2020, true, false);
let segundoAuto = new Auto("Ford", "Fiesta", 2015, false, true);
let tercerAuto = new Auto("Chevrolet", "Corsa", 2008, true, false);
let cuartoAuto = new Auto("Fiat", "Uno", 1999, true, false);




const estado= segundoAuto.estaAcelerando();
console.log(estado);