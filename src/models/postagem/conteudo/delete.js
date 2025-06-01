import { executar } from "../../../utils/mysql.js";
import { log } from "../../../utils/log.js";

export async function modelsPostagemConteudoDelete({ id }) {
    try {
        let instrucao = `delete from conteudos where id = ${id};`
        return await executar(instrucao)
    } catch (e) {
        log(import.meta.url, e)
        throw " ERRO NO BANCO "
    }

}
