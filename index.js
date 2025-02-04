import express from "express"
import cors from "cors"
import { rutasAnimales } from "./rutas/rutasAnimal.js";
import { ModeloA } from "./modelos/ModeloAnimal.js";


const PORT=3000;
const app=express();
app.use(express.json());
app.use(cors({origin:"*"}));
app.use('/api/animales',rutasAnimales(ModeloA));

app.listen(PORT,()=>{
    console.log("Servidor escuchando ...!");
})
