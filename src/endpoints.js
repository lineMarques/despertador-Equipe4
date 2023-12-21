/* Pacote para usar o arquivo .env */
import 'dotenv/config'

/* função assincrona para consumo da api hgWeather */
export async function getClima(cidade) {
  const key = process.env.KEY;
  let clima = await fetch(
    `https://api.hgbrasil.com/weather?woeid=455846&array_limit=1&fields=only_results,temp,city_name,condition_code,sunrise,sunset,forecast,max,min,date,&key=${key}`
  );

  return clima.json();
}
