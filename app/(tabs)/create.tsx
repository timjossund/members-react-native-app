import { Text, View, StyleSheet } from 'react-native'
import React, { Component } from 'react'

export class createPost extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Create Post</Text>
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

export default createPost