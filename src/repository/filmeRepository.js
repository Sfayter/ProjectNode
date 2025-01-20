import con from "./connection.js"

export async function inserirFilme(filme){

    let insert = `
    INSERT INTO tb_filme (nm_filme, ds_sinopse, vl_avaliacao, dt_lancamento, bt_disponivel) VALUES (?, ?, ?, ?, ?)
    `

    let response = await con.query(insert, [filme.nome, filme.sinopse, filme.avaliacao, filme.lancamento, filme.disponivel]);

    let id = response[0];

    let obterIdFilme = id.insertId;

    return obterIdFilme;
}

export async function deletarFilme(id){
    let deletarFilme = `
        DELETE FROM tb_filme WHERE id_filme = ?
    `

    let requisicao = await con.query(deletarFilme, [id])

    let informacao = requisicao[0];

    return informacao;
    
}

export async function consultarFilmes(nome){
    let consulta = `
    SELECT 
    id_filme     id,
    nm_filme    nome,
    vl_avaliacao    avaliacao, 
    dt_lancamento   lancamento,
    bt_disponivel   disponivel 
    FROM tb_filme WHERE nm_filme like ?;
    `

    let requisicao = await con.query(consulta, ['%' + nome + '%']);

    let informacao = requisicao[0];

    return informacao;
}

export async function consultarFilmesId(id){
    let comando = `
    SELECT 
    id_filme     id,
    nm_filme    nome,
    ds_sinopse      sinopse,
    vl_avaliacao    avaliacao, 
    dt_lancamento   lancamento,
    bt_disponivel   disponivel,
    img_filme       img
    FROM tb_filme WHERE id_filme = ?
    `

    let requisicao = await con.query(comando, [id]);


    let informacao = requisicao[0];

    return informacao;
}

export async function consultarFilmesAtivo(ativos){
    

    let comando = `
    select nm_filme     nome, ds_sinopse        sinopse, bt_disponivel      disponibilidade from tb_filme where bt_disponivel = ?
    `

    let requisicao = await con.query(comando, [ativos]);

    let informacao = requisicao[0]

    return informacao;
}

export async function consultarIgual(nome){

    let comando = `
        select nm_filme from tb_filme where nm_filme = ?;
    `

    let requisicao = await con.query(comando, [nome]);

    let informacao = requisicao[0];

    return informacao;
}
<<<<<<< HEAD
=======


export async function alterarFilme(filme, id){
    let comando = `
    UPDATE tb_filme SET
    nm_filme = ?, 
    ds_sinopse = ?, 
    vl_avaliacao = ?, 
    dt_lancamento = ?, 
    bt_disponivel = ?
    WHERE id_filme = ?;
    `

    let requisicao = await con.query(comando, [filme.nome, filme.sinopse, filme.avaliacao, filme.lancamento, filme.disponivel, id])

    let informacao = requisicao[0]

    let linhasAfetadas = informacao.affectedRows

    return linhasAfetadas;
}

export async function alterarFilmeIMG(id, caminho){
    let comando = `
    UPDATE tb_filme
    SET img_filme = ?
    WHERE id_filme = ?
    `

    let requisicao = await con.query(comando, [caminho, id]);

    let informacao = requisicao[0];

    let linhasAfetadas = informacao.affectedRows;

    return linhasAfetadas;
}
>>>>>>> ded2dcd (Terceiro commit)
