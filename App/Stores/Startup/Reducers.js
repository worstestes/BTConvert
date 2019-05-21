import { createReducer } from 'reduxsauce'
import { StartupTypes } from './Actions'

export const INITIAL_STATE = {
  errorMessage: null,
  currencies: {},
  articles: [],
  featuredArticles: [],
}

export const fetchCurrenciesSuccess = (state, action) => ({
  ...state,
  errorMessage: null,
  currencies: action.currencies,
})

export const fetchCurrenciesFailure = (state, action) => ({
  ...state,
  errorMessage: action.errorMessage,
})

export const fetchNewsSuccess = (state, action) => ({
  ...state,
  articles: action.articles,
  featuredArticles: action.featuredArticles,
})

export const reducer = createReducer(INITIAL_STATE, {
  [StartupTypes.FETCH_CURRENCIES_SUCCESS]: fetchCurrenciesSuccess,
  [StartupTypes.FETCH_CURRENCIES_FAILURE]: fetchCurrenciesFailure,
  [StartupTypes.FETCH_NEWS_SUCCESS]: fetchNewsSuccess,
})
