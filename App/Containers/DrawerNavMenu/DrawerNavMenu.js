import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import Icon from '../../Components/Icon'
import Logo from '../../Components/Logo'
import NavList from '../../Components/NavList'

const logo = require('../../Images/logo.png')

class DrawerNavMenu extends Component {
state = {

}

onNavigate = route => {
this.props.navigation.navigate(route)
}

render() {
    let routes = this.props.items.map(route => route.routeName)
return (
    <View style={styles.drawerContainer}>
        <Logo />
        <NavList routes={routes} currentRoute={this.props.activeItemKey} onPress={this.onNavigate}/>
  </View>
)
}
 
}


const styles = StyleSheet.create({
    drawerContainer: {
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#EFEFEF'
      },
})
export default DrawerNavMenu