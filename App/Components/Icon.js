import React from 'react'
import PropTypes from 'prop-types'
import { TouchableOpacity, Image, StyleSheet, ViewPropTypes } from 'react-native'

const Icon = ({ source, containerStyle, imageStyle, onPress }) => (
    <TouchableOpacity onPress={onPress} style={[containerStyle]}>
    <Image source={source} style={[styles.image, imageStyle]} />
</TouchableOpacity>
)

const styles = StyleSheet.create({
 image: {
     width: 25,
     height: 25,
 }
})

Icon.propTypes = {
    source: PropTypes.number.isRequired,
    style: ViewPropTypes.style,
    onPress: PropTypes.func,
    containerStyle: ViewPropTypes.style,
    imageStyle: ViewPropTypes.style
}

export default Icon