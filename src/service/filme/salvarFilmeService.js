import { inserirFilme } from "../../repository/filmeRepository.js"
import { validacoesFilme } from "../../validation/filme/validationFilme.js";

export default async function salvarFilmeService(filme){
    validacoesFilme(filme);

    let id = await inserirFilme(filme);

    return id;
}