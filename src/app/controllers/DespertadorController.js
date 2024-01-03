import DespertadorRepository from "../repositories/DespertadorRepository.js";

class DespertadorController {

  /* Retorna as configurações */
  async index(req, res) {
    let config = await DespertadorRepository.findAll();
    res.status(200).json(config);
  }

  show() {}

  /* Grava as configurações em um documento config.txt */
  store(req, res) {
    let config = DespertadorRepository.create(
      req.body.formatoHora,
      req.body.escalaTemp,
      req.body.cidade,
      req.body.sexo,
      req.body.nome
    );
    res.status(200).json(config);
  }

  update() {}

  delete() {}
}

export default new DespertadorController();
