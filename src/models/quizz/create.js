import { executar } from "../../utils/mysql.js";
import { log } from "../../utils/log.js";

export async function modelsQuizzCreate({ id, pontuacao }) {
    try {
        let instrucao = `insert into quizz(fkUsuario,pontuacao) VALUES (${id},${pontuacao});`
        return await executar(instrucao)
    } catch (e) {
        log(import.meta.url, e)
        throw " ERRO NO BANCO "
    }

}

export async function modelsQuizzMax({ id }) {
    try {
        let instrucao = `select max(pontuacao) from quizz where fkUsuario = ${id};`
        return await executar(instrucao)
    } catch (e) {
        log(import.meta.url, e)
        throw " ERRO NO BANCO "
    }

}
