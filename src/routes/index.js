import express from "express"
import routerPostagemIndex from "./postagem/index.js";
const routerIndex = express.Router();
routerIndex.use("/postagem", routerPostagemIndex)
export default routerIndex