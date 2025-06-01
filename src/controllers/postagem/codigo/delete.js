import { log } from "../../../utils/log.js";
import { servicesPostagemCodigoDelete } from "../../../services/postagem/codigo/Delete.js";
export const controllersPostagemCodigoDelete = async (req, res, next) => {
    try {
        const PARAMETROS = req.params;
        const { id } = req.body
        await servicesPostagemCodigoDelete({ id: id })
        return res.status(200).json({ OK: true });
    } catch (e) {
        log(import.meta.url, e)
        next(e, req, res, next)
    }
}