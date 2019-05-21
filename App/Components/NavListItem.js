import React from 'react'
import PropTypes from 'prop-types'
import { TouchableOpacity, StyleSheet } from 'react-native'

import MainText from './MainText'
const NavListItem = ({ route, currentRoute, onPress }) => (
  <TouchableOpacity key={route} style={styles.container} onPress={() => onPress(route)}>
    <MainText style={[styles.text, currentRoute === route ? { fontWeight: 'bold' } : null]}>
      {route}
    </MainText>
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  container: { width: '100%', marginBottom: 15 },
  text: { fontSize: 25, fontWeight: '200',
  shadowColor: '#000000',
  shadowOpacity: 0.09,
  shadowOffset: { width: .5, height: 1 },
  shadowRadius: 2, },
})

NavListItem.propTypes = {
  route: PropTypes.string.isRequired,
  currentRoute: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired
}

export default NavListItem
