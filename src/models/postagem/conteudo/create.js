import { executar } from "../../../utils/mysql.js";
import { log } from "../../../utils/log.js";

export async function modelsPostagemConteudoCreate({ titulo, descricao, nivel }) {
    try {
        let instrucao = `insert into conteudos(nome, descricao, dificuldade) VALUES ("${titulo}","${descricao}","${nivel}");`
        return await executar(instrucao)
    } catch (e) {
        log(import.meta.url, e)
        throw " ERRO NO BANCO "
    }

}
