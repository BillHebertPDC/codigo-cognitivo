import { modelsQuizzCreate, modelsQuizzMax } from "../../models/quizz/create.js"
import { log } from "../../utils/log.js"
export const servicesQuizzCreate = async ({ id, pontuacao }) => {
    try {
        await modelsQuizzCreate({ id: id, pontuacao: pontuacao })
        return await modelsQuizzMax({ id :id})
    } catch (e) {
        log(import.meta.url, e)
        throw e + " ERROR SERVICES "
    }
}