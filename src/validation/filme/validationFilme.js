

export function validacoesFilme(filme){
    if(!filme.nome)
        throw new Error ("Nome do filme obrigatório");

    if(!filme.sinopse)
        throw new Error ("Sinopse obrigatória");

    if(!filme.avaliacao)
        throw new Error ("Avaliação obrigatória");
    if(isNaN(filme.avaliacao))
        throw new Error ("Avaliação do filme inválida.");


    if(!filme.lancamento)
        throw new Error ("Lançamento obrigatório");

    if(filme.disponivel == undefined)
        throw new Error ("Disponibilidade obrigatória");


}

export function validacoesFilmeId(id){
    if(isNaN(id)){
        throw new Error ('Parâmetro ID incorreto.');
    }
    
}

export function validacaoUnica(filmes){
    if (filmes.length == 0)
        throw new Error ('Filme não encontrado.');
}




