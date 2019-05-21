import React from 'react'
import PropTypes from 'prop-types'
import { TouchableOpacity, StyleSheet } from 'react-native'
import MainText from './MainText'

const SortingMenuButton = ({ option, onOptionPress, selected }) => (
  <TouchableOpacity
    style={[styles.option, option.type === selected.type ? { backgroundColor: '#8B56AD' } : null]}
    onPress={() => onOptionPress(option)}
  >
    <MainText style={[styles.name, option.type === selected.type ? { color: 'white' } : null]}>
      {option.name}
    </MainText>
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  option: {
    width: 90,
    height: 20,
    backgroundColor: '#FEFCFF',
    borderRadius: 50,
    marginHorizontal: 5,
    marginVertical: 3,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000000',
    shadowOpacity: 0.15,
    shadowOffset: { width: 1, height: 2 },
    shadowRadius: 5,
  },
  name: { fontSize: 10 },
})

SortingMenuButton.propTypes = {
  option: PropTypes.object.isRequired,
  onOptionPress: PropTypes.func.isRequired,
  selected: PropTypes.object.isRequired,
}

export default SortingMenuButton
