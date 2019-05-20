/**
 * Reducers specify how the application's state changes in response to actions sent to the store.
 *
 * @see https://redux.js.org/basics/reducers
 */

import { INITIAL_STATE } from './InitialState'
import { createReducer } from 'reduxsauce'
import { ExampleTypes } from './Actions'

export const fetchUserLoading = (state) => ({
  ...state,
  userIsLoading: true,
  userErrorMessage: null,
})

export const fetchCurrenciesSuccess = (state, action) => {
  console.log(action)
  return {
    ...state,
    user: null,
    userIsLoading: false,
    userErrorMessage: null,
    currencies: action.currencies
  }
}

export const fetchUserFailure = (state, { errorMessage }) => ({
  ...state,
  user: {},
  userIsLoading: false,
  userErrorMessage: errorMessage,
})

/**
 * @see https://github.com/infinitered/reduxsauce#createreducer
 */
export const reducer = createReducer(INITIAL_STATE, {
  [ExampleTypes.FETCH_USER_LOADING]: fetchUserLoading,
  [ExampleTypes.FETCH_CURRENCIES_SUCCESS]: fetchCurrenciesSuccess,
  [ExampleTypes.FETCH_USER_FAILURE]: fetchUserFailure,
})
