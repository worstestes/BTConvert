import { put, call } from 'redux-saga/effects'
import ExampleActions from 'App/Stores/Example/Actions'
import { userService } from 'App/Services/UserService'
/**
 * A saga can contain multiple functions.
 *
 * This example saga contains only one to fetch fake user informations.
 * Feel free to remove it.
 */
export function* fetchUser() {
  // Dispatch a redux action using `put()`
  // @see https://redux-saga.js.org/docs/basics/DispatchingActions.html
  yield put(ExampleActions.fetchUserLoading())

  // Fetch user informations from an API
  const currencies = yield call(userService.fetchCurrencyData)
  if (currencies) {
    // let mainCurrencies = currencies.filter(currency => Currencies[currency.key])
    yield put(ExampleActions.fetchCurrenciesSuccess(currencies))
  } else {
    yield put(
      ExampleActions.fetchUserFailure('There was an error while fetching currency information.')
    )
  }
}
