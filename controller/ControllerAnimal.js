import { validarAnimal,validarParcialAnimal } from "../helpers/zod.js";

export class ControllerA{
    constructor(modelo){
        this.modelo=modelo;
    }

    getConAllAnimales=async(req,res)=>{
        res.json(await this.modelo.getAnimales());
    }

    postConAnimal=async(req,res)=>{
        console.log("post")
        const animalVal=validarAnimal(req.body);
        if(animalVal.success){
            const respuesta=await this.modelo.postAnimales(animalVal.data);
            if(respuesta){
                res.json(respuesta);
            }
        }else{
            res.status(400).json({error:"Error en los campos..!"});
        }
    }
}