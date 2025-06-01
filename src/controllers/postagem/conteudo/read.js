import { log } from "../../../utils/log.js";
import { servicesPostagemConteudoRead } from "../../../services/postagem/conteudo/read.js";
export const controllersPostagemConteudoRead = async (req, res, next) => {
    try {
        const { id, dificuldade } = req.params;
        let dados = await servicesPostagemConteudoRead({ dificuldade: dificuldade, id: id })
        return res.status(200).json(dados);
    } catch (e) {
        log(import.meta.url, e)
        next(e, req, res, next)
    }
}