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

export async function deletarFilme(filme){
    let deletarFilme = `
        DELETE FROM dbfilmes WHERE id = ?
    `

    let deletar = await con.query(deletarFilme[filme.id])


    
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
    select nm_filme, ds_sinopse, bt_disponivel from tb_filme where bt_disponivel ?
    `

    let requisicao = await con.query(comando, [ativos]);

    let informacao = requisicao[0]

    return informacao;
}
