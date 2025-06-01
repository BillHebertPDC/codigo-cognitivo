import { log } from "../../../utils/log.js";
import { servicesUsuarioCreate } from "../../../services/usuario/create.js";
export const controllersUsuarioCreate = async (req, res, next) => {
    try {
        const PARAMETROS = req.params;
        const { nome, email, senha } = req.body
        await servicesUsuarioCreate({ nome:nome, email:email, senha:senha})
        return res.status(200).json({ OK: true });
    } catch (e) {
        log(import.meta.url, e)
        next(e, req, res, next)
    }
}