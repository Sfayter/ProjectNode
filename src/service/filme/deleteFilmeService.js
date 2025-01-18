import { deletarFilme } from "../../repository/filmeRepository.js";

export default async function deletarFilmeId(id){
    let deletar = deletarFilme(id);

    return deletar;
}