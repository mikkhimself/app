import React from 'react';
import firebase from 'firebase';
import { View } from 'react-native';
import AnimatedLoader from 'react-native-animated-loader';

interface Props {
  navigation: any;
}

export default class AuthLoadingScreen extends React.Component<Props> {
  componentDidMount() {
    this.authFlowAsync();
  }

  // Use Firebase onAuthStateChanged to check if User is signed in or not
  authFlowAsync = async () => {
    // This will switch to the Home screen or Login screen and this loading
    // screen will be unmounted and thrown away.
    const { navigation } = this.props;
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        navigation.navigate('Home');
      } else {
        navigation.navigate('Login');
      }
    });
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      ></View>
    );
  }
}
