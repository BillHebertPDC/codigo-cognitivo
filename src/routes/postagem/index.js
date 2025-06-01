import express from "express"
import  routerPostagemCodigoIndex  from "./codigo/index.js";
import  routerPostagemConteudoIndex  from "./conteudo/index.js";

const routerPostagemIndex = express.Router();
routerPostagemIndex.use("/codigo", routerPostagemCodigoIndex)
routerPostagemIndex.use("/conteudo", routerPostagemConteudoIndex)

export default routerPostagemIndex
