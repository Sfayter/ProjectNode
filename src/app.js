import 'dotenv/config.js';
<<<<<<< HEAD
=======

>>>>>>> ded2dcd (Terceiro commit)
import express from 'express';
import cors from 'cors';
import adicionarRotas from './rotas.js';

import './utils/global.js'


const servidor = express();
servidor.use(cors());
servidor.use(express.json());

adicionarRotas(servidor);

const PORTA = process.env.PORTA;
servidor.listen(PORTA, () => console.log(`API subiu na porta ${PORTA}`));