import {Router} from "express";
import salvarFilmeService from "../service/filme/salvarFilmeService.js";
import consultarFilmeService from "../service/filme/consultarFilmeService.js";
import consultarFilmeServiceId from "../service/filme/consultarFilmeServiceId.js";
import consultarAtivosService from "../service/filme/consultarFilmeAtivosService.js";
import deletarFilmeId from "../service/filme/deleteFilmeService.js";


const servidor = Router();

servidor.post("/filme", async(req, resp) => {
    try{
    let filme = req.body;

    let id = await salvarFilmeService(filme);

    resp.send({
        id: id
    })
    }catch(err){
        logErro(err);
        resp.status(400).send(criarErro(err));
    }
})

servidor.get("/filme", async(req, resp) => {

    try{

        let nome = req.query.nome;

        let returnFilme = await consultarFilmeService(nome);

        resp.send(returnFilme);

    }catch(err){
        logErro(err);
        resp.status(400).send(criarErro(err));
    }
})

servidor.get("/filme/consultaid", async (req, resp) => {
    try{
    let id = Number(req.query.id);

    let consultar = await consultarFilmeServiceId(id);
    

    resp.send(consultar);

    }catch(err){
        logErro(err)
        resp.status(400).send(criarErro(err));
    }
})

servidor.get("/filme/ativos", async (req, resp) => {

    let ativos = req.query.ativos;
    
    let consulta = await consultarAtivosService(ativos);

    resp.send(consulta)
})

servidor.delete("/filme", async (req, resp) => {
    let id = Number(req.query.id)

    let delecao = deletarFilmeId(id);

    resp.send(delecao)
})


export default servidor;