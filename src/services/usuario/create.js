import { modelsUsuarioCreate } from "../../../models/usuario/create.js"
import { log } from "../../../utils/log.js"
export const servicesUsuarioCreate = async ({ nome, email, senha }) => {
    try {
        return await modelsUsuarioCreate({ nome: nome, email: email, senha: senha })
    } catch (e) {
        log(import.meta.url, e)
        throw e + " ERROR SERVICES "
    }
}