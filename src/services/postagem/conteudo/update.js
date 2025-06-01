import { modelsPostagemConteudoUpdate } from "../../../models/postagem/conteudo/update.js"
import { log } from "../../../utils/log.js"
export const servicesPostagemConteudoUpdate = async ({ titulo, descricao, nivel, id }) => {
    try {
        return await modelsPostagemConteudoUpdate({ titulo: titulo, descricao: descricao, nivel: nivel, id: id })
    } catch (e) {
        log(import.meta.url, e)
        throw e + " ERROR SERVICES "
    }
}