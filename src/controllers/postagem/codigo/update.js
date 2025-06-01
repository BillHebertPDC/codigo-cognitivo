import { log } from "../../../utils/log.js";
import { servicesPostagemCodigoUpdate } from "../../../services/postagem/codigo/update.js";
export const controllersPostagemCodigoUpdate = async (req, res, next) => {
    try {
        const PARAMETROS = req.params;
        const { titulo, codigo, nivel, id } = req.body
        await servicesPostagemCodigoUpdate({ titulo: titulo, codigo: codigo, nivel: nivel, id: id })
        return res.status(200).json({ OK: true });
    } catch (e) {
        log(import.meta.url, e)
        next(e, req, res, next)
    }
}