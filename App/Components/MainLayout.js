import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { SafeAreaView, ScrollView, View, StyleSheet, ViewPropTypes } from 'react-native'

import Header from './Header'


class MainLayout extends Component {
  state = {
  }

  render() {
    const {
    title,
      listStyle,
      children,
      style,
    } = this.props

    return (
      <SafeAreaView style={styles.mainContainer}>
        <Header title={title} />
            {children}
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center'
  },
})

MainLayout.propTypes = {
  title: PropTypes.string.isRequired,
}

export default MainLayout