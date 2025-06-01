import express from "express"
import routerPostagemIndex from "./postagem/index.js";
import routerUsuarioIndex from "./usuario/index.js";
const routerIndex = express.Router();
routerIndex.use("/postagem", routerPostagemIndex)
routerIndex.use("/usuario", routerUsuarioIndex)
export default routerIndex