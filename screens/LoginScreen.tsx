import * as React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

export default function LoginScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.tabBarInfoContainer}>
                <Text style={styles.tabBarInfoText}>
                    src/components/LoginScreen.tsx
                </Text>
            </View>
        </View>
    );
}

LoginScreen.navigationOptions = {
    header: null
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    tabBarInfoContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        ...Platform.select({
            ios: {
                shadowColor: 'black',
                shadowOffset: { width: 0, height: -3 },
                shadowOpacity: 0.1,
                shadowRadius: 3
            },
            android: {
                elevation: 20
            }
        }),
        alignItems: 'center',
        backgroundColor: '#fbfbfb',
        paddingVertical: 20
    },
    tabBarInfoText: {
        fontSize: 17,
        color: 'rgba(96,100,109, 1)',
        textAlign: 'center'
    }
});
