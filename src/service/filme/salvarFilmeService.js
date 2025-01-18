import { inserirFilme, consultarIgual } from "../../repository/filmeRepository.js"
import { validacaoNomeFilme, validacoesFilme } from "../../validation/filme/validationFilme.js";

export default async function salvarFilmeService(filme){
    validacoesFilme(filme);

    //Faz uma consulta no banco de dados e lista o nome dos filmes
    let informacoes = await consultarIgual(filme.nome);

    //verifica se o nome que está no objeto que está sendo enviado já existe no banco de dados. Funciona fazendo uma listagem utilizando o nome que está sendo enviado para a
    //criação no banco de dados, então antes de criar, ele dá um select no nome na tabela de filmes e utiliza o where para passar o nome da requisição do objeto
    //caso o retorno seja um objeto com posições acima de 0, é subentendido que já existe um filme com aquele nome e assim não é inserido e retorna o erro de que o nome já
    //existe. 
    validacaoNomeFilme(informacoes);
    

    let id = await inserirFilme(filme);

    return id;
}