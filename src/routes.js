import { Router } from "express";
import { getClima} from "./endpoints.js";

const router = Router();

/* Rota para teste de servidor */
router.get("/teste", (req, res) => {
  res.status(200).send("Servidor rodando");
});

router.get("/clima/:cidade", async (req, res) => {
  let clima =  await getClima(req.params.cidade);
  res.status(200).send(clima);
});

export default router;
