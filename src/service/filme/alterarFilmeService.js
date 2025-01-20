import { alterarFilme } from "../../repository/filmeRepository.js";

export default async function alterarFilmeService(filme, id){
    let alterar = await alterarFilme(filme, id)
    

    if (alterar == 0)
        throw new Error("Não houveram alterações");
    
}