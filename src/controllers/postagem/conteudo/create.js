import { log } from "../../../utils/log.js";
import { servicesPostagemConteudoCreate } from "../../../services/postagem/conteudo/create.js";
export const controllersPostagemConteudoCreate = async (req, res, next) => {
    try {
        const PARAMETROS = req.params;
        const { titulo, descricao, nivel } = req.body
        await servicesPostagemConteudoCreate({ titulo: titulo, descricao: descricao,  nivel: nivel })
        return res.status(200).json({ OK: true });
    } catch (e) {
        log(import.meta.url, e)
        next(e, req, res, next)
    }
}