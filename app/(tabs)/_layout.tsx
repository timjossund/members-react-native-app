import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { Tabs } from 'expo-router'
import { FontAwesome6 } from '@expo/vector-icons'

export class TabsLayout extends Component {
    render() {
        return (
            <Tabs screenOptions={{ tabBarActiveTintColor: 'white', tabBarInactiveTintColor: 'gray', tabBarStyle: { backgroundColor: '#2c2c2cff', paddingTop: 10 }, headerStyle: { backgroundColor: '#2c2c2cff' }, headerTitleStyle: { color: 'white' }, headerShadowVisible: false, headerShown: false }}>
                <Tabs.Screen name="index" options={{ title: 'Latest Posts', tabBarIcon: ({ color, size }) => <FontAwesome6 name="house" size={size} color={color} /> }} />
                <Tabs.Screen name="prayer" options={{ title: 'Prayer', tabBarIcon: ({ color, size }) => <FontAwesome6 name="hands-praying" size={size} color={color} /> }} />
                <Tabs.Screen name="create" options={{ title: 'Create Post', tabBarIcon: ({ color, size }) => <FontAwesome6 name="pen-clip" size={size} color={color} /> }} />
                <Tabs.Screen name="profile" options={{ title: 'Profile', tabBarIcon: ({ color, size }) => <FontAwesome6 name="user" size={size} color={color} /> }} />
            </Tabs>
        )
    }
}

export default TabsLayout