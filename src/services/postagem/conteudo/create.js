import { modelsPostagemConteudoCreate } from "../../../models/postagem/conteudo/create.js"
import { log } from "../../../utils/log.js"
export const servicesPostagemConteudoCreate = async ({ titulo, descricao, nivel }) => {
    try {
        return await modelsPostagemConteudoCreate({ titulo: titulo, descricao: descricao, nivel: nivel })
    } catch (e) {
        log(import.meta.url, e)
        throw e + " ERROR SERVICES "
    }
}