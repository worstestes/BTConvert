import React, { Component } from 'react'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import ExampleActions from 'App/Stores/Example/Actions'

import MainLayout from '../../Components/MainLayout'
import CurrencyList from '../../Components/CurrencyList'
import LoadingIndicator from '../../Components/LoadingIndicator'
import SortingMenu from '../../Components/SortingMenu'
import SelectedSortTitle from '../../Components/SelectedSortTitle'

class Home extends Component {
  state = {
    selected: { name: 'All', type: null},
    options: [
      { name: 'All', type: null},
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

  onSelectSortType = option => {
    let updated = this.state.selected.type === option.type ? null : option
    this.setState({
      selected: updated
    })
  }

  render() {
    const { selected, sortingMenuEnabled, options } = this.state
    const { currencies } = this.props
    let currencyData = currencies ? currencies : null
    if(selected.type) {
      currencyData = currencyData.filter(currency => currency.regionType[selected.type])
    }

    return (
      <MainLayout title='Home' menuEnabled={sortingMenuEnabled} onTitlePress={this.onSortMenuPress}>
        {sortingMenuEnabled ? <SortingMenu options={options} selected={selected} onOptionPress={this.onSelectSortType} /> : <SelectedSortTitle selected={selected.name}/>}
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
