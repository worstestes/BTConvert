import React, { Component } from 'react'
import { Platform, Text, View, Button, ActivityIndicator, Image, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import ExampleActions from 'App/Stores/Example/Actions'
import { Images } from 'App/Theme'


import MainLayout from '../../Components/MainLayout'
import CurrencyList from '../../Components/CurrencyList'

class Home extends Component {
  componentDidMount() {
    this.props.fetchCurrencyData()
  }

  render() {
    console.log(this.props.currencies)
    let currencyData = this.props.currencies ? this.props.currencies : null
    return (
      <MainLayout title='Home'>
        <CurrencyList data={currencyData} />
      </MainLayout>
    )
  }
}

Home.propTypes = {
  user: PropTypes.object,
  userIsLoading: PropTypes.bool,
  userErrorMessage: PropTypes.string,
  fetchUser: PropTypes.func,
  currencies: PropTypes.arrayOf(PropTypes.object)
}

const mapStateToProps = (state) => ({
  user: state.example.user,
  userIsLoading: state.example.userIsLoading,
  userErrorMessage: state.example.userErrorMessage,
  currencies: state.example.currencies,

})

const mapDispatchToProps = (dispatch) => ({
  fetchUser: () => dispatch(ExampleActions.fetchUser()),
  fetchCurrencyData: () => dispatch(ExampleActions.fetchCurrencyData()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
