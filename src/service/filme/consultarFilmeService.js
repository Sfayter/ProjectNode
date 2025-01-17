import { consultarFilmes } from "../../repository/filmeRepository.js"


export default async function consultarFilmeService(nome){
    if(!nome){
        nome=''
    }

    let nomeFilme = await consultarFilmes(nome);

    return nomeFilme;
}