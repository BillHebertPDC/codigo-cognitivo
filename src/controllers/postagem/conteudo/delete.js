import { log } from "../../../utils/log.js";
import { servicesPostagemConteudoDelete } from "../../../services/postagem/conteudo/Delete.js";
export const controllersPostagemConteudoDelete = async (req, res, next) => {
    try {
        const PARAMETROS = req.params;
        const { id } = req.body
        await servicesPostagemConteudoDelete({ id: id })
        return res.status(200).json({ OK: true });
    } catch (e) {
        log(import.meta.url, e)
        next(e, req, res, next)
    }
}