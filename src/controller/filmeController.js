import {Router} from "express";
import salvarFilmeService from "../service/filme/salvarFilmeService.js";

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

export default servidor;