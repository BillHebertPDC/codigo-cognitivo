import { executar } from "../../utils/mysql.js";
import { log } from "../../utils/log.js";

export async function modelsUsuarioUpdate({ nome, email, senha,id }) {
    try {
        let instrucao = `update usuarios set nome = "${nome}", email = "${email}", senha = "${senha}" where id =${id};`
        return await executar(instrucao)
    } catch (e) {
        log(import.meta.url, e)
        throw " ERRO NO BANCO "
    }

}
