import { takeLatest, all } from 'redux-saga/effects'
import { StartupTypes } from '../Stores/Startup/Actions'
import { startup, fetchCurrencyData, fetchNewsData } from './StartupSaga'

export default function* root() {
  yield all([
    takeLatest(StartupTypes.STARTUP, startup),
    takeLatest(StartupTypes.FETCH_CURRENCIES_SUCCESS, fetchCurrencyData),
    takeLatest(StartupTypes.FETCH_NEWS_SUCCESS, fetchNewsData),
  ])
}

