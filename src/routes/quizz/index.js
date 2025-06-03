import express from "express"
//import controllersQuizzRead from "../../controllers/Quizz/read.js"
import { controllersQuizzCreate } from "../../controllers/quizz/create.js"


const routerQuizzIndex = express.Router();
//routerQuizzIndex.get("/", controllersQuizzRead)
routerQuizzIndex.post("/", controllersQuizzCreate)


export default routerQuizzIndex
