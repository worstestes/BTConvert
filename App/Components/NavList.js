import React from 'react'
import PropTypes from 'prop-types'
import { View, StyleSheet } from 'react-native'

import NavListItem from './NavListItem'

const NavList = ({ routes, currentRoute, onPress }) => (
  <View style={styles.container}>
    {routes.length
      ? routes.map((route) => (
          <NavListItem key={route} route={route} currentRoute={currentRoute} onPress={onPress} />
        ))
      : null}
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '90%',
    borderTopWidth: 0.8,
    borderColor: 'rgba(0,0,0,.45)',
    paddingTop: 20,
  },
})

NavList.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.string).isRequired,
  currentRoute: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
}

export default NavList
