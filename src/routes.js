import { Router } from "express";
import Despestador from "./Despestador.js";

const router = Router();

/* Rota para teste de servidor */
router.get("/teste", (req, res) => {
  res.status(200).send("Servidor rodando");
});

router.get("/clima/:cidade", async (req, res) => {
  let despertador = new Despestador();
  let clima = await despertador.getClima(req.params.cidade);
  res.status(200).send(clima);
});

router.get("/horaCerta", (req, res) => {
  let despertador = new Despestador();
  let hora = despertador.getHoraCerta();
  res.status(200).send(hora);
});

router.get("/hoje", (req, res) => {
  let despertador = new Despestador();
  let hoje = despertador.getHoje();
  console.log(hoje);
  res.status(200).send(hoje);
});
export default router;
