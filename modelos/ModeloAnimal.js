import { data } from "../data/datos.js";
const datosAnimales=data;

export class ModeloA{
    static getAnimales(){
        return datosAnimales;
    }
    static postAnimales(animalCrear){
        const ultimoIndice=datosAnimales[datosAnimales.length-1].id+1;
        animalCrear.id=ultimoIndice;
        datosAnimales.push(animalCrear);
        return animalCrear;
    }
}