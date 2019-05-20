import { create } from 'apisauce'
import { Config } from 'App/Config/index'

import numeral from "numeral";
import getSymbolFromCurrency from 'currency-symbol-map'
import { mainCurrencies, northAmerica, europe, africa, southAmerica, asiaPacific } from '../Theme/Currencies'



/**
 * This is an example of a service that connects to a 3rd party API.
 *
 * Feel free to remove this example from your application.
 */

const userApiClient = create({
  /**
   * Import the config from the App/Config/index.js file
   */
  baseURL: Config.API_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  timeout: 3000,
})

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


  // try {
  //   let response = await fetch(
  //     'https://api.coindesk.com/v1/bpi/currentprice.json',
  //   );
  //   let responseJson = await response.json();

  //   let currencyData = Object.values(responseJson.bpi).map(currency => ({
  //     ...currency,
      // key: currency.code,
      // symbol: getSymbolFromCurrency(currency.code) ? getSymbolFromCurrency(currency.code) : null,
      // rate_float: numeral(currency.rate_float).format("0,0.00"),
      // code: null,
  //   }))
    

  //   return currencyData
  // } catch (e) {
  //   console.error(e);
  // }
}


export const userService = {
  fetchCurrencyData,
}
