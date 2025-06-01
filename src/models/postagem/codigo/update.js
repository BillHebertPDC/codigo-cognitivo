import { executar } from "../../../utils/mysql.js";
import { log } from "../../../utils/log.js";

export async function modelsPostagemCodigoUpdate({ titulo, codigo, nivel, id }) {
    try {
        let instrucao = `update codigos set nome = "${titulo}", codigo="${codigo}", dificuldade="${nivel}" where id = ${id};`
        return await executar(instrucao)
    } catch (e) {
        log(import.meta.url, e)
        throw " ERRO NO BANCO "
    }

}
