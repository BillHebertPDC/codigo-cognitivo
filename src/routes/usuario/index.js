import express from "express"
//import controllersUsuarioRead from "../../controllers/usuario/read.js"
import { controllersUsuarioCreate } from "../../controllers/usuario/create.js"
import { controllersUsuarioUpdate } from "../../controllers/usuario/update.js"
//import controllersUsuarioDelete from "../../controllers/usuario/delete.js"

const routerUsuarioIndex = express.Router();
//routerUsuarioIndex.get("/", controllersUsuarioRead)
routerUsuarioIndex.post("/", controllersUsuarioCreate)
routerUsuarioIndex.put("/", controllersUsuarioUpdate)
//routerUsuarioIndex.delete("/", controllersUsuarioDelete)


export default routerUsuarioIndex
