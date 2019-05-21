import React from 'react'

import { createAppContainer, createStackNavigator, createDrawerNavigator} from 'react-navigation'
import Home from 'App/Containers/Home/Home'
import About from 'App/Containers/About/About'
import News from 'App/Containers/News/News'

import SplashScreen from 'App/Containers/SplashScreen/SplashScreen'
import DrawerNavMenu from 'App/Containers/DrawerNavMenu/DrawerNavMenu'

const DrawerNavigator = createDrawerNavigator(
  {
    Home: Home,
    About: About,
    News: News
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none',
    initialRouteName: 'Home',
    contentComponent: ({ navigation, ...options }) => (
      <DrawerNavMenu {...options} navigation={navigation} />
    ),
    drawerWidth: 200,
  }
)

const StackNavigator = createStackNavigator(
  {
    SplashScreen: SplashScreen,
    Home: DrawerNavigator,
  },
  {
    initialRouteName: 'SplashScreen',
    headerMode: 'none',
  }
)

export default createAppContainer(StackNavigator)
