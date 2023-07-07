const axios = require('axios');
const { Country } = require('../db'); 
const {
    DB_USER, DB_PASSWORD, DB_HOST, API_KEY
  } = process.env;

const buscaInfoApi = async() => {
    const buscaTodaInfo = await axios.get('https://restcountries.com/v3.1/all');
    console.log(buscaInfoApi);
    const ApiInfo = await buscaTodaInfo.data.map(pais => {
        return {
            id: pais.cca3,
            name: pais.name.common,
            imgBandera : pais.flags.png,
            continente : pais.continents,
            capital : pais.capital != null ? pais.capital[0] : "No data",
            subregión : pais.subregion,
            área : pais.area,
            población: pais.population
        };
    });

    // console.log(ApiInfo);
    ApiInfo.forEach(element => {
        Country.findOrCreate({
            where:{name: element.name},
            defaults:{
                id: element.id,
                name: element.name,
                imgBandera: element.imgBandera,
                continente: element.continente,
                capital: element.capital,
                subregión: element.subregión,
                área: element.área,
                población: element.población
            }
        })
    });
    return ApiInfo;
};

module.exports = buscaInfoApi;