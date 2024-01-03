/* Pacote para usar o arquivo .env */
import "dotenv/config";

/* modulo para interagir com o sistema de arquivos   */
import { promises } from "fs";

class Despertador {
  /* função assincrona para consumo da api hgWeather - retorna informações do clima*/
  async getClima(cidade) {
    const key = process.env.KEY;
    let clima = await fetch(
      `https://api.hgbrasil.com/weather?&city_name=${cidade},SC&array_limit=1&fields=only_results,temp,city_name,condition_code,sunrise,sunset,forecast,max,min,date,&key=${key}`
    );
    return clima.json();
  }

  /* funçao retorna hora do sistema */
  getHoraCerta() {
    let today = new Date();
    let hora = today.getHours();
    let minuto = today.getMinutes();
    let segundo = today.getSeconds();
    return "horaCerta " + hora + ":" + minuto + ":" + segundo;
  }

  /* função retorna o dia de hoje formatado */
  getHoje() {
    let today = new Date();

    /* esta variavel é a sigla dos numeros ordinais em ingles - sr, nd, rd, th */
    let ordinal = "";

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

    return today.toString().slice(0, 10) + ordinal + ", " + today.getFullYear();
  }

  /* função para gravar as configurações no documento config.txt */
  async postConfig(formatoHora, escalaTemp, cidade, sexo, nome) {
    const fs = promises;
    try {
      (await fs.writeFile("config.txt", formatoHora + "," + escalaTemp + "," + cidade + "," + sexo + "," + nome)) +
        "\n";
    } catch (error) {
      console.log(error);
    }
  }

  /* função que retorna as configurações no documento config.txt */
  async getConfig() {
    try {
   
      const fs = promises;
      let configs = await fs.readFile("config.txt", "utf-8");
      let configDados = configs.split(",");
  
      let configObj = {
        formatoHora: configDados[0],
        escalaTemp: configDados[1],
        cidade: configDados[2],
        sexo: configDados[3],
      };
  
      let status = {
        status: 0,
        message: 'sucesso',
        value: configObj
      }
      
      return status;

    } catch (error) {
      console.log(error);
    }
   
  }
}

export default Despertador;
