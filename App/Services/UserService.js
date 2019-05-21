import numeral from "numeral";
import moment from "moment";
import getSymbolFromCurrency from 'currency-symbol-map'
import { mainCurrencies, northAmerica, europe, africa, southAmerica, asiaPacific } from '../Theme/Currencies'

const fetchCurrencyData = async () => {
  try{
    let response = await fetch('https://api.coindesk.com/v1/bpi/supported-currencies.json')
    let responseJson =  await response.json();

    let currenciesList = responseJson.map(async currency => {
      let res = await fetch(`https://api.coindesk.com/v1/bpi/currentprice/${currency.currency}.json`)
      let resJson = await res.json()
      let currencyData = await resJson.bpi[currency.currency]
      let key = currencyData.code
      let regionType = {
        mainCurrencies: mainCurrencies[key] ? mainCurrencies[key] : null,
        northAmerica: northAmerica[key] ? northAmerica[key] : null,
        southAmerica: southAmerica[key] ? southAmerica[key] : null,
        africa: africa[key] ? africa[key] : null,
        europe: europe[key] ? europe[key] : null,
        asiaPacific: asiaPacific[key] ? asiaPacific[key] : null
      }

      return {
        ...currencyData,
        key: currencyData.code,
        symbol: getSymbolFromCurrency(currencyData.code) ? getSymbolFromCurrency(currencyData.code) : null,
        rate_float: numeral(currencyData.rate_float).format("0,0.00"),
        name: currencyData.description,
        regionType,
        code: null,
      }

    })
    return await Promise.all(currenciesList)
  } catch(e) {
    console.error(e)
  }
}

const fetchNews = async () => {
 try {
  let newsSearch = "bitcoin";
  let currentDay = moment().format("YYYY-MM-DD");
  const URL = `https://newsapi.org/v2/everything?q=${newsSearch}&from=${currentDay}&sortBy=publishedat&apiKey=${'424849785c084263b27ef7a7461cb0be'}`;
  const response = await fetch(URL);
  const json = await response.json();
  let filteredArticles = json.articles.filter(article => article.urlToImage !== null && article.urlToImage !== "")

  let articles = filteredArticles.slice(3);
  let featuredArticles = filteredArticles.slice(0, 3);

  return {
    articles,
    featuredArticles
  }
 } catch(e) {
   console.error(e)
 }
}


export const userService = {
  fetchCurrencyData,
  fetchNews
}
