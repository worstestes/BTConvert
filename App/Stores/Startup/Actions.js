import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
  startup: null,
  fetchNewsSuccess: ['articles'],
  fetchNewsFailure: ['errorMessage'],
  fetchCurrenciesSuccess: ['currencies'],
  fetchCurrenciesFailure: ['errorMessage'],
})

export const StartupTypes = Types
export default Creators

