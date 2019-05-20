import React from 'react'
import PropTypes from 'prop-types'
import { TouchableOpacity, StyleSheet } from 'react-native'
import MainText from './MainText'

const SortingMenuItems = ({ option, onOptionPress, selected}) => (
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
        width: 80,
        height: 20,
        backgroundColor: '#FEFCFF',
        borderRadius: 50,
        marginHorizontal: 5,
        marginVertical: 3,
        justifyContent: 'center',
        alignItems: 'center',
      },
      name: { fontSize: 10 },
})

SortingMenuItems.propTypes = {
option: PropTypes.object.isRequired,
onOptionPress: PropTypes.func.isRequired,
selected: PropTypes.object.isRequired,
}

export default SortingMenuItems