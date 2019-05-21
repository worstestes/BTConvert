import React, { Component } from 'react'
import { connect } from 'react-redux'

import { View, StyleSheet } from 'react-native'
import MainLayout from '../../Components/MainLayout'
import NewsList from '../../Components/NewsList'
import LoadingIndicator from '../../Components/LoadingIndicator'

class News extends Component {
  render() {
    const { articles } = this.props

    return (
      <MainLayout title="News" onMenuPress={() => openDrawer()}>
        <View style={styles.container}>
          {articles ? <NewsList articles={articles.articles} /> : <LoadingIndicator />}
        </View>
      </MainLayout>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '95%',
    marginTop: 25,
    alignItems: 'center',
  },
})

const mapStateToProps = (state) => ({
  articles: state.startup.articles,
})

export default connect(mapStateToProps)(News)
