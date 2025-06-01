import express from "express"
import { controllersPostagemCodigoCreate } from "../../../controllers/postagem/codigo/create.js";
import { controllersPostagemCodigoUpdate } from "../../../controllers/postagem/codigo/update.js"
import { controllersPostagemCodigoDelete } from "../../../controllers/postagem/codigo/delete.js"
import { controllersPostagemCodigoRead } from "../../../controllers/postagem/codigo/read.js"

const routerPostagemCodigoIndex = express.Router();
routerPostagemCodigoIndex.post("/", controllersPostagemCodigoCreate)
routerPostagemCodigoIndex.put("/", controllersPostagemCodigoUpdate)
routerPostagemCodigoIndex.delete("/", controllersPostagemCodigoDelete)
routerPostagemCodigoIndex.get("/:dificuldade?/:id?", controllersPostagemCodigoRead)


export default routerPostagemCodigoIndex
