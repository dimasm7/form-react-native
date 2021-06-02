import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const Button = ({text, onPress}) => {
    return (
        <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
            <View style={styles.container}>
                <Text style={styles.text}>{text}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default Button

const styles = StyleSheet.create({
    container: {
        padding: 12, 
        borderRadius: 8,
        backgroundColor: 'green'
    },
    text:{
        fontSize: 14, 
        textAlign: 'center',
        color: 'white'
    },
})
