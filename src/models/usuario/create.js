import { executar } from "../../utils/mysql.js";
import { log } from "../../utils/log.js";

export async function modelsUsuarioCreate({ nome, email, senha }) {
    try {
        let instrucao = `insert into usuarios(nome, email, senha) VALUES ("${nome}","${email}","${senha}");`
        return await executar(instrucao)
    } catch (e) {
        log(import.meta.url, e)
        throw " ERRO NO BANCO "
    }

}
