import Despertador from "../../Despertador.js";

class DespestadorRepository {
  /* Método que recebe os dados do request e chama a função postconfig */
  create(formatoHora, escalaTemp, cidade, sexo, nome) {
    let despertador = new Despertador();
    despertador.postConfig(formatoHora, escalaTemp, cidade, sexo, nome);
  }

  async findAll() {
    let despertador = new Despertador();
    return despertador.getConfig();
  }
}
export default new DespestadorRepository();
