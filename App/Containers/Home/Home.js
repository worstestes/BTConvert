import React, { Component } from 'react'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'

import MainLayout from '../../Components/MainLayout'
import CurrencyList from '../../Components/CurrencyList'
import LoadingIndicator from '../../Components/LoadingIndicator'
import SortingMenu from '../../Components/SortingMenu'
import SelectedSortTitle from '../../Components/SelectedSortTitle'

import { sortingOptions } from '../../Utils/Data/Currencies'
import SplashScreen from '../SplashScreen/SplashScreen'

class Home extends Component {
  state = {
    selected: { name: 'Popular', type: 'mainCurrencies' },
    sortingMenuEnabled: false,
  }

  onSortMenuPress = () => {
    let updated = !this.state.sortingMenuEnabled
    this.setState({
      sortingMenuEnabled: updated,
    })
  }

  onSelectSortType = (option) => {
    let updated = this.state.selected.type === option.type ? null : option
    this.setState({
      selected: updated,
    })

    this.onSortMenuPress()
  }

  render() {
    const { selected, sortingMenuEnabled } = this.state
    const { currencies } = this.props

    if(!currencies) {
      return <SplashScreen />
    }

    let currencyData = currencies ? currencies : []
    if (selected.type && currencyData.length) {
      currencyData = currencyData.filter((currency) => currency.regionType[selected.type])
    }

    return (
      <MainLayout title="Home">
        {sortingMenuEnabled ? (
          <SortingMenu
            options={sortingOptions}
            selected={selected}
            onOptionPress={this.onSelectSortType}
          />
        ) : (
          <SelectedSortTitle selected={selected.name} onPress={this.onSortMenuPress} />
        )}
        {currencyData && currencyData.length ? (
          <CurrencyList data={currencyData} />
        ) : (
          <LoadingIndicator />
        )}
      </MainLayout>
    )
  }
}

Home.propTypes = {
  errorMessage: PropTypes.string,
  currencies: PropTypes.arrayOf(PropTypes.object),
}

const mapStateToProps = (state) => ({
  errorMessage: state.startup.errorMessage,
  currencies: state.startup.currencies,
})

export default connect(mapStateToProps)(Home)
