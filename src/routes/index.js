import express from "express"
import routerPostagemCodigoIndex from "./postagem/codigo/index.js";
const routerIndex = express.Router();
routerIndex.use("/postagem", routerPostagemCodigoIndex)
export default routerIndex