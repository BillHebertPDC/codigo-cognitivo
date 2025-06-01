import express from "express"
import { controllersPostagemConteudoCreate } from "../../../controllers/postagem/conteudo/create.js";
import { controllersPostagemConteudoUpdate } from "../../../controllers/postagem/conteudo/update.js"
import { controllersPostagemConteudoDelete } from "../../../controllers/postagem/conteudo/delete.js"
import { controllersPostagemConteudoRead } from "../../../controllers/postagem/conteudo/read.js"

const routerPostagemConteudoIndex = express.Router();
routerPostagemConteudoIndex.post("/", controllersPostagemConteudoCreate)
routerPostagemConteudoIndex.put("/", controllersPostagemConteudoUpdate)
routerPostagemConteudoIndex.delete("/", controllersPostagemConteudoDelete)
routerPostagemConteudoIndex.get("/:dificuldade?/:id?", controllersPostagemConteudoRead)


export default routerPostagemConteudoIndex
