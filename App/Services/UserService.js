import { create } from 'apisauce'
import { Config } from 'App/Config/index'

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

  try {
    let response = await fetch(
      'https://api.coindesk.com/v1/bpi/currentprice.json',
    );
    let responseJson = await response.json();

    let currencyData = Object.values(responseJson.bpi).map(currency => ({
      ...currency,
      key: currency.code,
      code: null
    }))
    

    return currencyData
  } catch (error) {
    console.error(error);
  }
}


export const userService = {
  fetchCurrencyData,
}
