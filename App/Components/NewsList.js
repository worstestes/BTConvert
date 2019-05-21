import React from 'react'
import PropTypes from 'prop-types'
import { FlatList } from 'react-native'

import NewsListItem from './NewsListItem'

const NewsList = ({ articles }) => (
  <FlatList
    data={articles}
    renderItem={(article) => (
      <NewsListItem 
        source={{
            uri: article.item.urlToImage,
          }}
        headline={article.item.title}
        url={article.item.url}
        publishedTime={article.item.publishedAt}
      />
    )}
    keyExtractor={(article) => article.url}
  />
)

NewsList.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default NewsList
