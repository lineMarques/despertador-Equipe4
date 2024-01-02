import { Router } from "express";
import Despertador from "./Despertador.js";
import DespertadorController from "./app/controllers/DespertadorController.js";


/* importação para usar __dirname */
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const router = Router();
const despertador = new Despertador;

/* Endpoint para teste de servidor */
router.get("/teste", (req, res) => {
  res.status(200).send("Servidor rodando");
});

/* Endpoint para obter informações de clima da cidade - getClima */
router.get("/clima/:cidade", async (req, res) => {  
  let clima = await despertador.getClima(req.params.cidade);
  res.status(200).send(clima);
});

/* Endpoint para getHoraCerta*/
router.get("/horaCerta", (req, res) => {
  let hora = despertador.getHoraCerta();
  res.status(200).send(hora);
});

/* Endpoint para getHoje*/
router.get("/hoje", (req, res) => {
  let hoje = despertador.getHoje();
  console.log(hoje);
  res.status(200).send(hoje);
});

router.get("/testeht", async (req, res) => {
  res.status(200).sendFile(__dirname + "/views/teste.html");
});

router.post("/config", DespertadorController.store);



export default router;
