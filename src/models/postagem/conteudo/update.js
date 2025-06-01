import { executar } from "../../../utils/mysql.js";
import { log } from "../../../utils/log.js";

export async function modelsPostagemConteudoUpdate({ titulo, descricao, nivel, id }) {
    try {
        let instrucao = `update conteudos set nome = "${titulo}", descricao="${descricao}", dificuldade="${nivel}" where id = ${id};`
        return await executar(instrucao)
    } catch (e) {
        log(import.meta.url, e)
        throw " ERRO NO BANCO "
    }

}
