import { executar } from "../../../utils/mysql.js";
import { log } from "../../../utils/log.js";

export async function modelsPostagemCodigoRead({ id, dificuldade }) {
    try {
        const conditions = [];
        if (dificuldade !== undefined && dificuldade !== null && dificuldade != "X") {
            conditions.push(`dificuldade in (${dificuldade})`);
        }
        if (id !== undefined && id !== null) {
            conditions.push(`id in (${id})`);
        }
        const where = conditions.length ? `WHERE ${conditions.join(" AND ")}` : "";
        const sql = `SELECT * FROM codigos ${where}`;
        return await executar(sql);

    } catch (e) {
        log(import.meta.url, e);
        throw "ERRO NO BANCO";
    }
}
