import { log } from "../../../utils/log.js";
import { servicesPostagemConteudoUpdate } from "../../../services/postagem/conteudo/update.js";
export const controllersPostagemConteudoUpdate = async (req, res, next) => {
    try {
        const PARAMETROS = req.params;
        const { titulo, descricao, nivel, id } = req.body
        await servicesPostagemConteudoUpdate({ titulo: titulo, descricao: descricao, nivel: nivel, id: id })
        return res.status(200).json({ OK: true });
    } catch (e) {
        log(import.meta.url, e)
        next(e, req, res, next)
    }
}