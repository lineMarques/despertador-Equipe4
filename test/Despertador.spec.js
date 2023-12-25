import Despestador from "../src/Despestador.js";

describe("Testes Despertador.js", () => {
  test('Função getClima(cidade) - dado cidade = Itajai, o resultado esperado eh condições climaticas {"date", "condition_code",  "sunrise", "sunset", "city_name", "max", "min"', () => {
    let despertador = new Despestador();
    let resul = despertador.getClima("Itajai");
    expect(typeof resul).toEqual("object");
  });

  test("Função getHoraCerta(), o resultado esperado é a hora do sistema formata ex: 10:00:01", () => {
    let despertador = new Despestador();
    let resul = despertador.getHoraCerta();
    let today = new Date();
    expect(resul).toEqual("horaCerta " + today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds());
  });

  test('Função getHoje(), o resultado esperado é o dia de hoje no formato - Fri Jun 17th, 2022', () => {
    let despertador = new Despestador();
    let resul = despertador.getHoje();   
    let today = new Date();
    let ordinal = '';

    switch (today.getDay) {
      case 1:
        ordinal = "st";
        break;

      case 2:
        ordinal = "nd";
        break;

      case 3:
        ordinal = "rd";
        break;

      default:
        ordinal = "th";
        break;
    }
    expect(resul).toEqual(today.toString().slice(0, 10) + ordinal + ", " + today.getFullYear())
    
  });
  
});
