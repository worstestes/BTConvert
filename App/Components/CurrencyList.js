import React from 'react'
import PropTypes from 'prop-types'
import { FlatList, Text, StyleSheet } from 'react-native'
import CurrencyListItem from './CurrencyListitem'


const CurrencyList = ({ data }) => {
return (
<FlatList style={styles.container}  data={data}
  renderItem={({item}) => <CurrencyListItem abbreviation={item.key} rate={item.rate_float} symbol={item.symbol} name={item.name} />}
  />
)
 
}


const styles = StyleSheet.create({
container: {
    flex: 1,
    width: '90%',
    marginTop: 25
}
})

CurrencyList.propTypes = {
//x: PropTypes.,
}

export default CurrencyList