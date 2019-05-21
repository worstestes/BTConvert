import React from 'react'
import PropTypes from 'prop-types'
import { View, StyleSheet } from 'react-native'

import MainText from './MainText'
import Icon from './Icon'

const chevron = require('../Images/chevron.png')



const SelectedSortTitle = ({ selected, onPress }) => {
  const chevronIcon = <Icon source={chevron} containerStyle={{ marginTop: 4 }} onPress={onPress} />

return (
  <View style={styles.container}>
    <MainText style={styles.title}>Converted Bitcoin BPI to: </MainText>
    <View style={styles.selectedSortContainer}>
    <MainText style={styles.selectedSort}>{selected} currencies</MainText>
    {chevronIcon}
    </View>
  </View>
)}

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
  selectedSortContainer: {
    flexDirection: 'row', alignItems: 'center'
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
  onPress: PropTypes.func.isRequired,

}

export default SelectedSortTitle
