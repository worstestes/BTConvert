import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'

import Logo from '../../Components/Logo'

class SplashScreen extends Component{
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logo}>
         <Logo showText={false} imageStyle={{ width: 150, height: 150}}/>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ED9095',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default SplashScreen
