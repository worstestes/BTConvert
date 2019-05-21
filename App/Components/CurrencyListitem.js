import React from 'react'
import PropTypes from 'prop-types'
import { View, StyleSheet } from 'react-native'
import MainText from './MainText'

const CurrencyListItem = ({ abbreviation, rate, symbol, name }) => (
  <View style={styles.container}>
    <View style={styles.nameContainer}>
      <MainText style={styles.abbreviation}>{abbreviation}</MainText>
      <MainText style={[styles.name, name.length > 20 ? { fontSize: 8 } : null]}>{name}</MainText>
    </View>
    <View style={styles.detailContainer}>
      <View style={styles.priceContainer}>
        <MainText style={{ fontWeight: '600', marginRight: 5, letterSpacing: 0.9 }}>
          {`${rate}`}
        </MainText>
      </View>
      <View style={styles.iconContainer}>
        <MainText style={{ color: 'cornflowerblue', fontSize: 15, fontWeight: '600' }}>
          {symbol ? symbol : abbreviation}
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
    backgroundColor: 'white',
    shadowColor: '#000000',
    shadowOpacity: 0.15,
    shadowOffset: { width: 1, height: 2 },
    shadowRadius: 5,
  },
  nameContainer: {
    width: 125,
    height: 50,
    borderRadius: 50,
    borderBottomRightRadius: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1F0A2E',
  },
  abbreviation: { fontSize: 17, color: '#ECECEC', fontWeight: '600', letterSpacing: 0.7 },
  name: { color: 'white', fontSize: 9, marginTop: 2, maxWidth: '91.5%', textAlign: 'center' },
  detailContainer: {
    flex: 1,
    flexDirection: 'row',
    height: 50,
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  priceContainer: { flex: 1, height: 40, justifyContent: 'center', alignItems: 'flex-end' },
  iconContainer: {
    width: 50,
    height: 40,
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
    borderLeftWidth: 0.25,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

CurrencyListItem.propTypes = {
  abbreviation: PropTypes.string.isRequired,
  rate: PropTypes.string.isRequired,
  symbol: PropTypes.string,
  name: PropTypes.string.isRequired,
}

export default CurrencyListItem
