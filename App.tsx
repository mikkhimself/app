import React, { useState, Component } from 'react';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import Navigator from './navigation/AppNavigator';
import firebase from 'firebase';

console.disableYellowBox = true;
console.ignoredYellowBox = ['Warning: Each', 'Warning: Failed'];

import {
  FIREBASE_API_KEY,
  FIREBASE_AUTH_DOMAIN,
  FIREBASE_DATABASE_URL,
  FIREBASE_PROJECT_ID,
  FIREBASE_STORAGE_BUCKET,
  FIREBASE_MESSAGING_SENDER_ID,
  FIREBASE_APP_ID,
  FIREBASE_MEASUREMENT_ID,
} from 'react-native-dotenv';

const firebaseConfig = {
  apiKey: FIREBASE_API_KEY,
  authDomain: FIREBASE_AUTH_DOMAIN,
  databaseURL: FIREBASE_DATABASE_URL,
  projectId: FIREBASE_PROJECT_ID,
  storageBucket: FIREBASE_STORAGE_BUCKET,
  messagingSenderId: FIREBASE_MESSAGING_SENDER_ID,
  measurementId: FIREBASE_MEASUREMENT_ID,
  appId: FIREBASE_APP_ID,
};
/**
 * Initialize firebase
 */
firebase.initializeApp(firebaseConfig);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

interface Props {
  skipLoadingScreen?: boolean;
}

export default class App extends Component<Props> {
  public state = {
    isLoadingComplete: false,
  };
  public loadResourcesAsync = async () => {
    return Promise.all([
      Font.loadAsync({
        MaisonBold: require('./assets/fonts/Maison-Neue-Bold.ttf'),
        'SF-display': require('./assets/fonts/SFProDisplay-Regular.ttf'),
        'SF-Bold': require('./assets/fonts/SFProDisplay-Bold.ttf'),
        'SF-Medium': require('./assets/fonts/SFProDisplay-Medium.ttf'),
        MaisonMedium: require('./assets/fonts/MaisonNeue-Medium.ttf'),
        MaisonDemi: require('./assets/fonts/MaisonNeue-Demi.ttf'),
      }),
    ]);
  };

  public handleLoadingError = (error: Error) => {
    console.warn(error);
  };

  public handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };
  public render(): JSX.Element {
    const { isLoadingComplete } = this.state;
    const { skipLoadingScreen } = this.props;
    if (!isLoadingComplete && !skipLoadingScreen) {
      return (
        <AppLoading
          // @ts-ignore
          startAsync={this.loadResourcesAsync}
          onError={this.handleLoadingError}
          onFinish={this.handleFinishLoading}
        />
      );
    }
    return (
      <View style={styles.container}>
        {Platform.OS === 'ios' && <StatusBar hidden={true} />}
        <Navigator />
      </View>
    );
  }
}
