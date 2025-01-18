import { consultarFilmesId } from "../../repository/filmeRepository.js"
import { validacaoUnica, validacoesFilmeId } from "../../validation/filme/validationFilme.js";

export default async function consultarFilmeServiceId(id){
    validacoesFilmeId(id);
    
    let filmes = await consultarFilmesId(id);

    validacaoUnica(filmes);

    let filmeId = filmes[0];

    return filmeId;
}