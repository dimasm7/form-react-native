import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'

const Input = ({label, value, onChangeText }) => {
    return (
        <View>
            <Text style={styles.label}>{label}</Text>
            <TextInput
                value={value}
                onChangeText={onChangeText}
                style={styles.input}
            />
        </View>
    )
}

export default Input

const styles = StyleSheet.create({
    label:{
        fontSize: 16,
        marginBottom: 6,
    },
    input:{
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 10,
        padding: 12
    },
})
