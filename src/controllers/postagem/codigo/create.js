import { log } from "../../../utils/log.js";
import { servicesPostagemCodigoCreate } from "../../../services/postagem/codigo/create.js";
export const controllersPostagemCodigoCreate = async (req, res, next) => {
    try {
        const PARAMETROS = req.params;
        const { titulo, explicacao, codigo, nivel } = req.body
        await servicesPostagemCodigoCreate({ titulo: titulo, explicacao: explicacao, codigo: codigo, nivel: nivel })
        return res.status(200).json({ OK: true });
    } catch (e) {
        log(import.meta.url, e)
        next(e, req, res, next)
    }
}