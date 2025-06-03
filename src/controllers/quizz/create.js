import { log } from "../../utils/log.js";
import { servicesQuizzCreate } from "../../services/quizz/create.js";

export const controllersQuizzCreate = async (req, res, next) => {
    try {
        const PARAMETROS = req.params;
        const { id, resultado } = req.body
        let res = await servicesQuizzCreate({ id: id, pontuacao: resultado })
        return res.status(200).json({ ok: true, max: res[0] });
    } catch (e) {
        log(import.meta.url, e)
        next(e, req, res, next)
    }
}