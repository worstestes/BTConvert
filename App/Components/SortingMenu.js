import React from 'react'
import PropTypes from 'prop-types'
import { View, StyleSheet } from 'react-native'
import SortingMenuItem from './SortingMenuItem'

const SortingMenu = ({ options, selected, onOptionPress }) => {
  let optionButtons = options.map((option) => (
      <SortingMenuItem 
      key={option.type}
      option={option}
      selected={selected}
      onOptionPress={onOptionPress}
      />
  ))
  return (
    <View style={styles.container}>
      <View style={styles.optionsContainer}>{options ? optionButtons : null}</View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 100,
    backgroundColor: '#ED9095',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
  optionsContainer: {
    height: '100%',
    width: '90%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
})

SortingMenu.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  selected: PropTypes.object.isRequired,
  onOptionPress: PropTypes.func.isRequired,
}

export default SortingMenu
