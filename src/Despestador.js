/* Pacote para usar o arquivo .env */
import "dotenv/config";

class Despestador {

  /* função assincrona para consumo da api hgWeather */

  async getClima(cidade) {
    const key = process.env.KEY;
    let clima = await fetch(
      `https://api.hgbrasil.com/weather?&city_name=${cidade},SC&array_limit=1&fields=only_results,temp,city_name,condition_code,sunrise,sunset,forecast,max,min,date,&key=${key}`
    );
    return clima.json();
  }

}

export default Despestador;