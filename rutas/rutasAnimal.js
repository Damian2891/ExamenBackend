import express,{Router} from "express";
import { ControllerA } from "../controller/ControllerAnimal.js";
export const rutasAnimales=(modelo)=>{
    const rutas=Router();
    let cAnimal=new ControllerA(modelo);
    rutas.get('/',cAnimal.getConAllAnimales);
    rutas.post('/',cAnimal.postConAnimal);
    return rutas;
}