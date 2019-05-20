import React from 'react'
import PropTypes from 'prop-types'
import { View, TouchableOpacity, StyleSheet } from 'react-native'
import MainText from './MainText'
const SortingMenu = ({ options, selected, onOptionPress}) => {
    let optionViews = options.map(option => <TouchableOpacity key={option.type} style={[styles.option, option.type === selected ? { backgroundColor: '#8B56AD' } : null]} onPress={() => onOptionPress(option.type)}>
        <MainText style={[styles.name, option.type === selected ? { color: 'white' } : null]}>
        {option.name}
        </MainText>
    </TouchableOpacity> )
return (
<View style={styles.container}>
    <View style={styles.optionsContainer}>
    {options ?  optionViews : null}
    </View>
</View>
)
 
}


const styles = StyleSheet.create({
container: { width: '100%', height: 75, backgroundColor: '#ED9095', justifyContent: 'center', alignItems: 'center',     borderBottomLeftRadius: 50,
borderBottomRightRadius: 50,},
optionsContainer: { height: '100%', width: '90%', marginTop: 20, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center',},
option: {  width: 80, height: 20, backgroundColor: '#FEFCFF', borderRadius: 50, marginHorizontal: 5, marginVertical: 3, justifyContent: 'center', alignItems: 'center'},
name: { fontSize: 10, }
})

SortingMenu.propTypes = {
//x: PropTypes.,
}

export default SortingMenu