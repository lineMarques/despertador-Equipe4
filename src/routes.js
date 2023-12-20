import { Router } from "express";
import DespertadorController from "./app/controllers/DespertadorController.js";
import send from "send";

const router = Router();

/* Rota para teste de servidor */
router.get("/teste", (req, res) => {
  res.status(200).send("Servidor rodando");
});

export default router;
