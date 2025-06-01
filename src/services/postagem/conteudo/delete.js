import { modelsPostagemConteudoDelete } from "../../../models/postagem/conteudo/Delete.js"
import { log } from "../../../utils/log.js"
export const servicesPostagemConteudoDelete = async ({ id }) => {
    try {
        return await modelsPostagemConteudoDelete({ id: id })
    } catch (e) {
        log(import.meta.url, e)
        throw e + " ERROR SERVICES "
    }
}