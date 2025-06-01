import { modelsPostagemCodigoDelete } from "../../../models/postagem/codigo/Delete.js"
import { log } from "../../../utils/log.js"
export const servicesPostagemCodigoDelete = async ({ id }) => {
    try {
        return await modelsPostagemCodigoDelete({ id: id })
    } catch (e) {
        log(import.meta.url, e)
        throw e + " ERROR SERVICES "
    }
}