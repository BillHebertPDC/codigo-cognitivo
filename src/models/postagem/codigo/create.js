import { executar } from "../../../utils/mysql.js";
import { log } from "../../../utils/log.js";

export async function modelsPostagemCodigoCreate({ titulo, explicacao, codigo, nivel }) {
    try {
        let instrucao = `insert into codigos(nome, codigo, dificuldade) VALUES ("${titulo}","${codigo}","${nivel}");`
        return await executar(instrucao)
    } catch (e) {
        log(import.meta.url, e)
        throw " ERRO NO BANCO "
    }

}
