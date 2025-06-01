import { modelsPostagemCodigoRead } from "../../../models/postagem/codigo/read.js"
import { log } from "../../../utils/log.js"
export const servicesPostagemCodigoRead = async ({ dificuldade, id }) => {
    try {
        return await modelsPostagemCodigoRead({ id: id, dificuldade: dificuldade })
    } catch (e) {
        log(import.meta.url, e)
        throw e + " ERROR SERVICES "
    }
}