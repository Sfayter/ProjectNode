import { consultarFilmesAtivo } from "../../repository/filmeRepository.js";

export default async function consultarAtivosService(ativos){
    let consultaAtivos = await consultarFilmesAtivo(ativos);

    return consultaAtivos;
}