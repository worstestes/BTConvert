import React from 'react'
import PropTypes from 'prop-types'
import { View, StyleSheet } from 'react-native'

import MainText from './MainText'

const SelectedSortTitle = ({ selected }) => (
  <View style={styles.container}>
    <MainText style={styles.title}>Convert Bitcoin Core (BTC) to world currencies.</MainText>
    <MainText style={styles.title}>Conversion rate as per Bitcoin price index</MainText>
    <MainText style={styles.selectedSort}>{selected}</MainText>
  </View>
)

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 50,
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: { fontSize: 15, fontWeight: '500', letterSpacing: .4 },
  selectedSort: { marginTop: 15, fontSize: 20, color: 'cornflowerblue', fontWeight: '600', letterSpacing: .9},

})

SelectedSortTitle.propTypes = {
  selected: PropTypes.string.isRequired,
}

export default SelectedSortTitle
