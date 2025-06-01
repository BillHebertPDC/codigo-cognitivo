import { modelsPostagemConteudoRead } from "../../../models/postagem/conteudo/read.js"
import { log } from "../../../utils/log.js"
export const servicesPostagemConteudoRead = async ({ dificuldade, id }) => {
    try {
        return await modelsPostagemConteudoRead({ id: id, dificuldade: dificuldade })
    } catch (e) {
        log(import.meta.url, e)
        throw e + " ERROR SERVICES "
    }
}