import { log } from "../../../utils/log.js";
import { servicesPostagemCodigoRead } from "../../../services/postagem/codigo/read.js";
export const controllersPostagemCodigoRead = async (req, res, next) => {
    try {
        const { id, dificuldade } = req.params;
        let dados = await servicesPostagemCodigoRead({ dificuldade: dificuldade, id: id })
        return res.status(200).json(dados);
    } catch (e) {
        log(import.meta.url, e)
        next(e, req, res, next)
    }
}