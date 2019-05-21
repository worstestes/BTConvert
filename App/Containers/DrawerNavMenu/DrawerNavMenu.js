import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import Logo from '../../Components/Logo'
import NavList from '../../Components/NavList'

class DrawerNavMenu extends Component {
  onNavigate = (route) => {
    this.props.navigation.navigate(route)
  }

  render() {
    let routes = this.props.items.map((route) => route.routeName)
    return (
      <View style={styles.drawerContainer}>
        <Logo showText={true}/>
        <NavList
          routes={routes}
          currentRoute={this.props.activeItemKey}
          onPress={this.onNavigate}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  drawerContainer: {
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#EFEFEF',
  },
})
export default DrawerNavMenu
