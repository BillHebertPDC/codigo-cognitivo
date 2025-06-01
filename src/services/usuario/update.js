import { modelsUsuarioUpdate } from "../../../models/usuario/update.js"
import { log } from "../../../utils/log.js"
export const servicesUsuarioUpdate = async ({ nome, email, senha, id }) => {
    try {
        return await modelsUsuarioUpdate({ nome: nome, email: email, senha: senha, id: id })
    } catch (e) {
        log(import.meta.url, e)
        throw e + " ERROR SERVICES "
    }
}