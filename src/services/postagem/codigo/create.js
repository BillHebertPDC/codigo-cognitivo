import { modelsPostagemCodigoCreate } from "../../../models/postagem/codigo/create.js"
import { log } from "../../../utils/log.js"
export const servicesPostagemCodigoCreate = async ({ titulo, explicacao, codigo, nivel }) => {
    try {
        return await modelsPostagemCodigoCreate({ titulo: titulo, explicacao: explicacao, codigo: codigo, nivel: nivel })
    } catch (e) {
        log(import.meta.url, e)
        throw e + " ERROR SERVICES "
    }
}