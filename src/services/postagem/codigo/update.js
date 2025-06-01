import { modelsPostagemCodigoUpdate } from "../../../models/postagem/codigo/update.js"
import { log } from "../../../utils/log.js"
export const servicesPostagemCodigoUpdate = async ({ titulo, codigo, nivel, id }) => {
    try {
        return await modelsPostagemCodigoUpdate({ titulo: titulo, codigo: codigo, nivel: nivel, id: id })
    } catch (e) {
        log(import.meta.url, e)
        throw e + " ERROR SERVICES "
    }
}