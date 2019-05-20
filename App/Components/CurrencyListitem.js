import React from 'react'
import PropTypes from 'prop-types'
import { View, StyleSheet } from 'react-native'
import MainText from './MainText'

const CurrencyListItem = ({ name, rate }) => (
  <View style={styles.container}>
    <View style={styles.nameContainer}>
      <MainText style={styles.name}>
            {name}
        </MainText>
    </View>
    <View style={styles.other}>
        <View style={styles.priceContainer}>
        <MainText style={{ fontWeight: '600', marginRight: 5}}>
            {rate}
        </MainText>
        </View>
        <View style={styles.iconContainer}>
            <MainText>
                X
            </MainText>
        </View>
    </View>
  </View>
)

const styles = StyleSheet.create({
  container: {
    width: '95%',
    height: 50,
    marginVertical: 10,
    borderRadius: 50,
    backgroundColor: '#ECECEC',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  nameContainer: {
    width: 75,
    height: 50,
    borderRadius: 50,
    borderTopRightRadius: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(54,69,79)',
  },
  name: { fontSize: 17, color: '#ECECEC', fontWeight: '300', letterSpacing: .7 },
  other: {
    flex: 1,
    flexDirection: 'row',

    height: 50,
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
    justifyContent: 'flex-end',
    // paddingRight: 25,
    alignItems: 'center',
    // backgroundColor: 'pink',
  },
  priceContainer: { width: 75, height: 40, justifyContent: 'center', alignItems: 'center'},
  iconContainer: { width: 50, height: 40, borderTopRightRadius: 50, borderBottomRightRadius: 50, borderLeftWidth: .25, justifyContent: 'center', alignItems: 'center' }
})

CurrencyListItem.propTypes = {
  //x: PropTypes.,
}

export default CurrencyListItem
