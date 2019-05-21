import { put, call } from 'redux-saga/effects'
import StartupActions from '../Stores/Startup/Actions'
import { userService } from '../Services/UserService'
import { NavigationService } from '../Services/NavigationService'

/**
 * navigates to 'Home' route upon app startup in RootScreen
 */
export function* startup() {
  NavigationService.navigateAndReset('Home')
}

/**
 * fetches currency data of BTC price index converted to world fiat currencies
 */
export function* fetchCurrencyData() {
  const currencies = yield call(userService.fetchCurrencyData)
  currencies
    ? yield put(StartupActions.fetchCurrenciesSuccess(currencies))
    : yield put(
        StartupActions.fetchCurrenciesFailure(
          'There was an error while fetching currency information.'
        )
      )
}

/**
 * fetches news articles related to bitcoin
 * 
 * expected: 
 * news = {
 * articles,
 * featuredArticles
 * }
 */
export function* fetchNewsData() {
  const news = yield call(userService.fetchNews)
  news
  ? yield put(StartupActions.fetchNewsSuccess(news))
  : StartupActions.fetchNewsFailure('There was an error while fetching news information.')
}
