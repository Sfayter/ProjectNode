import con from "./connection.js"

export async function inserirFilme(filme){

    let insert = `
    INSERT INTO dbfilmes (nm_filme, sinopse_filme, avaliacao_filme, lancamento_filme, disponivel_filme) VALUES (?,?,?,?,?)
    `

    let response = await con.query(insert [filme.nome, filme.sinopse, filme.avaliacao, filme.lancamento, filme.disponivel])

    let id = response[0];

    let obterIdFilme = id.insertId;

    return obterIdFilme;
}

export async function deletarFilme(filme){
    let deletarFilme = `
        DELETE FROM dbfilmes WHERE id = ?
    `

    let deletar = await con.query(deletarFilme[filme.id])


    
}
