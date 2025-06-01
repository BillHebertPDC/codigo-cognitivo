import { log } from "../../../utils/log.js";
import { servicesUsuarioUpdate } from "../../../services/usuario/update.js";
export const controllersUsuarioUpdate = async (req, res, next) => {
    try {
        const PARAMETROS = req.params;
        const { nome, email, senha, id } = req.body
        await servicesUsuarioUpdate({ nome: nome, email: email, senha: senha, id: id })
        return res.status(200).json({ OK: true });
    } catch (e) {
        log(import.meta.url, e)
        next(e, req, res, next)
    }
}