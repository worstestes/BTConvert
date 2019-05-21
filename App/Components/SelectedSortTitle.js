import React from 'react'
import PropTypes from 'prop-types'
import { View, StyleSheet } from 'react-native'

import MainText from './MainText'

const SelectedSortTitle = ({ selected }) => (
  <View style={styles.container}>
    <MainText style={styles.title}>Converted Bitcoin BPI to: </MainText>
    <MainText style={styles.selectedSort}>{selected} currencies</MainText>
  </View>
)

const styles = StyleSheet.create({
  container: {
    width: '90%',
    height: 90,
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 5,
    shadowColor: '#000000',
    shadowOpacity: 0.15,
    shadowOffset: { width: 1, height: 2 },
    shadowRadius: 5,
    elevation: 3,
  },
  title: {
    fontSize: 15,
    fontWeight: '500',
    letterSpacing: 0.4,
    width: '97%',
    textAlign: 'center',
    marginBottom: 5,
  },
  selectedSort: {
    marginTop: 3,
    fontSize: 20,
    color: 'cornflowerblue',
    fontWeight: '600',
    letterSpacing: 0.9,
    textAlign: 'center',
  },
})

SelectedSortTitle.propTypes = {
  selected: PropTypes.string.isRequired,
}

export default SelectedSortTitle
