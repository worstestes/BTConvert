import React, { Component } from 'react'
import { NavigationService } from 'App/Services/NavigationService'
import AppNavigator from 'App/Navigators/AppNavigator'
import { View } from 'react-native'
import { connect } from 'react-redux'
import StartupActions from 'App/Stores/Startup/Actions'
import { PropTypes } from 'prop-types'

class RootScreen extends Component {
  componentDidMount() {
    this.props.startup()
    this.props.fetchCurrencyData()
    this.props.fetchNewsData()
  }    


  render() {
    return (
      <View style={{flex: 1}}>
        <AppNavigator
          ref={(navigatorRef) => NavigationService.setTopLevelNavigator(navigatorRef)}
        />
      </View>
    )
  }
}

RootScreen.propTypes = {
  startup: PropTypes.func,
  fetchData: PropTypes.func,
  fetchNewsSuccess: PropTypes.func
}

const mapDispatchToProps = (dispatch) => ({
  startup: () => dispatch(StartupActions.startup()),
  fetchCurrencyData: () => dispatch(StartupActions.fetchCurrenciesSuccess()),
  fetchNewsData: () => dispatch(StartupActions.fetchNewsSuccess())
})

export default connect(
  null,
  mapDispatchToProps
)(RootScreen)
