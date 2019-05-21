import React from 'react'
import PropTypes from 'prop-types'
import { Linking, Image, View, StyleSheet } from 'react-native'

import moment from 'moment'
import MainText from './MainText'

const NewsListItem = ({ source, headline, url, publishedTime }) => (
  <View style={styles.detailsContainer}>
    <View style={styles.imageContainer}>
      <Image style={styles.articleImage} source={source} />
    </View>

    <View style={styles.textContainer}>
      <MainText style={styles.headlinesText} onPress={() => Linking.openURL(url)}>
        {headline}
      </MainText>
      <MainText style={styles.publishedTime}>{moment(publishedTime).fromNow()}</MainText>
    </View>
  </View>
)

const styles = StyleSheet.create({
  detailsContainer: {
    width: '95%',
    backgroundColor: 'white',
    marginBottom: 18,
    borderRadius: 5,
    shadowColor: '#000000',
    shadowOpacity: 0.15,
    shadowOffset: { width: 1, height: 2 },
    shadowRadius: 5,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    elevation: 3,
  },
  imageContainer: {
    alignItems: 'center',
    marginVertical: 10,
  },
  articleImage: {
    width: 120,
    height: 80,
    borderRadius: 6,
  },
  textContainer: {
    width: 180,
  },
  headlinesText: {
    fontSize: 11,
    fontWeight: 'bold',
  },
  publishedTime: {
    marginTop: 5,
    fontSize: 8,
  },
})

NewsListItem.propTypes = {
  source: PropTypes.object,
  headline: PropTypes.string.isRequired,
  url: PropTypes.string,
  publishedTime: PropTypes.string,
}

export default NewsListItem
