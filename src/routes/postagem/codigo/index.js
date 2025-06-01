import express from "express"
import { controllersPostagemCodigoCreate } from "../../../controllers/postagem/codigo/create.js";
import { controllersPostagemCodigoUpdate } from "../../../controllers/postagem/codigo/update.js"
import { controllersPostagemCodigoDelete } from "../../../controllers/postagem/codigo/delete.js"
import { controllersPostagemCodigoRead } from "../../../controllers/postagem/codigo/read.js"

const routerPostagemCodigoIndex = express.Router();
routerPostagemCodigoIndex.post("/codigo", controllersPostagemCodigoCreate)
routerPostagemCodigoIndex.put("/codigo", controllersPostagemCodigoUpdate)
routerPostagemCodigoIndex.delete("/codigo", controllersPostagemCodigoDelete)
routerPostagemCodigoIndex.get("/codigo/:dificuldade?/:id?", controllersPostagemCodigoRead)


export default routerPostagemCodigoIndex
