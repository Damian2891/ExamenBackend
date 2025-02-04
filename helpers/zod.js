import zod, { number } from "zod"
const esquemaAnimal=zod.object(
    {
            id:zod.number(),
            nombrevulgar:zod.string(),
            sexo:zod.string(),
            anioN:zod.string(),
            paisO:zod.string(),
            observaciones:zod.string()
    }
)

export const validarAnimal=(animal)=>{
    return esquemaAnimal.omit({id:true}).safeParse(animal);

}

export const validarParcialAnimal=(animal)=>{
    return esquemaAnimal.partial().safeParse(animal);

}