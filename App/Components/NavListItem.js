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
  text: { fontSize: 21, fontWeight: '200' },
})

NavListItem.propTypes = {
  route: PropTypes.string.isRequired,
  currentRoute: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired
}

export default NavListItem
