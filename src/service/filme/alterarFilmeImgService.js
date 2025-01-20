import { alterarFilmeIMG } from "../../repository/filmeRepository.js";

export default async function alterarFilmeImgService(id, caminho){
    let alterar = await alterarFilmeIMG(id, caminho);

    if(alterar == 0)
        throw new Error("Não houveram alterações.");
}