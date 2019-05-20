import React, { Component } from 'react'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import ExampleActions from 'App/Stores/Example/Actions'

import MainLayout from '../../Components/MainLayout'
import CurrencyList from '../../Components/CurrencyList'
import LoadingIndicator from '../../Components/LoadingIndicator'
import SortingMenu from '../../Components/SortingMenu'

class Home extends Component {
  state = {
    selected: 'europe',
    options: [
     { name: 'Popular', type: 'mainCurrencies'},
     { name: 'North America', type: 'northAmerica'},
     { name: 'South America', type: 'southAmerica'},
     { name: 'Asia/Pacific', type: 'asiaPacific'},
     { name: 'Africa', type: 'africa'},
     { name: 'Europe', type: 'europe'},
    ],
    sortingMenuEnabled: false
  }
  componentDidMount() {
    this.props.fetchCurrencyData()
  }

  onSortMenuPress = () => {
    let updated = !this.state.sortingMenuEnabled
    this.setState({
      sortingMenuEnabled: updated
    })
  }

  onSelectSortType = type => {
    let updated = this.state.selected === type ? null : type
    this.setState({
      selected: updated
    })
  }

  render() {
    const { selected, sortingMenuEnabled, options } = this.state
    let currencyData = this.props.currencies ? this.props.currencies : null
    if(selected) {
      currencyData = currencyData.filter(currency => currency.regionType[selected]).sort((a,b) => {
        console.log(a)
        if(a.key === 'USD') {
          return 1
        }
      })
    }
    return (
      <MainLayout title='Home' menuEnabled={sortingMenuEnabled} onTitlePress={this.onSortMenuPress}>
        {sortingMenuEnabled ? <SortingMenu options={options} selected={selected} onOptionPress={this.onSelectSortType} /> : null}
        {currencyData && currencyData.length ? <CurrencyList data={currencyData} /> : <LoadingIndicator />}
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
