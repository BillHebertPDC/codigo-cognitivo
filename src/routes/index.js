import express from "express"
import routerPostagemIndex from "./postagem/index.js";
import routerUsuarioIndex from "./usuario/index.js";
import routerQuizzIndex from "./quizz/index.js";
const routerIndex = express.Router();
routerIndex.use("/postagem", routerPostagemIndex)
routerIndex.use("/usuario", routerUsuarioIndex)
routerIndex.use("/quizz", routerQuizzIndex)
export default routerIndex