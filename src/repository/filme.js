/*import con from "./connection.js"

export async function filmeInserir(filme){
    let insert = `
    INSERT INTO db_filme (nm_filme, sinopse_filme, avaliacao_filme, lancamento_filme, disponivel_filme) VALUES (?, ?, ?, ?, ?)
    `

    let requisition = await con.query(insert [filme.nome, filme.sinopse, filme.avaliacao, filme.lancamento, filme.disponivel]);

    let information = requisition[0];

    let obterID = information.insertId;

    return obterID;
}

*/

