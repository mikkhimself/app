import React, { useState, Component } from 'react';
import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';

console.disableYellowBox = true;
console.ignoredYellowBox = ['Warning: Each', 'Warning: Failed'];

type Props = {};

export default class App extends Component<Props> {
    render() {
        return (
            <View style={styles.container}>
                {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
                <HomeScreen />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    }
});
