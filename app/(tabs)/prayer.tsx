import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { StyleSheet } from 'react-native'

export class Prayer extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Prayer</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#2c2c2cff',
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    },
})

export default Prayer