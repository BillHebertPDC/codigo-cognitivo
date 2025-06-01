import express from "express"
import { controllersPostagemConteudoCreate } from "../../../controllers/postagem/conteudo/create.js";
import { controllersPostagemConteudoUpdate } from "../../../controllers/postagem/conteudo/update.js"
import { controllersPostagemConteudoDelete } from "../../../controllers/postagem/conteudo/delete.js"
import { controllersPostagemConteudoRead } from "../../../controllers/postagem/conteudo/read.js"

const routerPostagemConteudoIndex = express.Router();
routerPostagemConteudoIndex.post("/Conteudo", controllersPostagemConteudoCreate)
routerPostagemConteudoIndex.put("/Conteudo", controllersPostagemConteudoUpdate)
routerPostagemConteudoIndex.delete("/Conteudo", controllersPostagemConteudoDelete)
routerPostagemConteudoIndex.get("/conteudo/:dificuldade?/:id?", controllersPostagemConteudoRead)


export default routerPostagemConteudoIndex
