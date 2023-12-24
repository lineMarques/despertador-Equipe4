import Despestador from "../src/Despestador.js";

describe("Testes Despertador.js", () => {
  test('Função getClima(cidade) - dado cidade = Itajai, o resultado esperado eh condições climaticas {"date", "condition_code",  "sunrise", "sunset", "city_name", "max", "min"', () => {
    let despertador = new Despestador();
    let resul = despertador.getClima("Itajai");    
    expect(typeof resul).toEqual("object");
  });
  
});
