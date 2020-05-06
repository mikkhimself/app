import React, { Component } from 'react';
import {
  Text,
  View,
  Keyboard,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import firebase from 'firebase';
import Logo from '../components/Logo';
import AnimatedLoader from 'react-native-animated-loader';

import InputField from '../components/Forms/Components/InputField';

interface InputProps {
  password: string;
  email: string;
  error: string;
  loading: boolean;
}

export class LoginScreen extends React.Component<{ navigation: any }, InputProps> {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: '',
      loading: false,
    };
  }

  handleLogin = () => {
    const { password, email } = this.state;
    const { navigation } = this.props;
    this.setState({ error: '', loading: true });
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => navigation.navigate('Main'))
      .catch((error) => this.setState({ error: error.message, loading: false }));
  };

  render() {
    const { password, email, loading, error } = this.state;
    const { navigation } = this.props;

    return (
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.container}>
          <Logo style={{ alignSelf: 'flex-start', bottom: '20%', right: '2%' }} />
          <View style={{ bottom: '10%', alignSelf: 'flex-start' }}>
            <Text
              style={{
                fontFamily: 'MaisonBold',
                fontSize: 24,
                color: '#25265E',
              }}
            >
              Hello!
            </Text>
            <View
              style={{
                top: '10%',
                alignSelf: 'flex-start',
              }}
            >
              <Text style={{ fontFamily: 'MaisonMedium', fontSize: 16, color: '#787993' }}>
                Glad to have you onboard! Log in
              </Text>
              <Text
                style={{
                  top: '60%',
                  fontFamily: 'MaisonMedium',
                  fontSize: 16,
                  color: '#787993',
                }}
              >
                to start using the app
              </Text>
            </View>
            <View style={{ justifyContent: 'center', top: '25%' }}>
              <InputField
                placeholderTextColor="#787993"
                placeholder="Email address"
                value={this.state.email}
                onChangeText={(email) => this.setState({ email })}
              />
              <InputField
                placeholderTextColor="#787993"
                placeholder="Password"
                value={password}
                secureTextEntry
                onChangeText={(input) => this.setState({ password: input })}
              />
              <View style={{ justifyContent: 'space-between' }}>
                <TouchableOpacity style={styles.button} onPress={this.handleLogin}>
                  {loading ? (
                    <AnimatedLoader
                      visible={true}
                      overlayColor="rgba(255,255,255,0.75)"
                      source={require('../assets/loader.json')}
                      animationStyle={styles.lottie}
                      speed={1}
                    />
                  ) : (
                    <Text style={{ fontFamily: 'MaisonBold', fontSize: 16, color: '#7540EE' }}>
                      Login
                    </Text>
                  )}
                </TouchableOpacity>
                <View style={{ justifyContent: 'flex-end', bottom: '40%' }}>
                  <Text
                    style={{
                      bottom: '15%',
                      left: '15%',
                      alignSelf: 'flex-end',
                      fontFamily: 'MaisonMedium',
                      color: '#7540EE',
                    }}
                  >
                    Forgot password?
                  </Text>
                </View>
              </View>
            </View>
          </View>

          <Text style={{ color: 'red', textAlign: 'center' }}>{error}</Text>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}
export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 40,
  },
  button: {
    margin: 10,
    paddingVertical: 12,
    width: '40%',
    alignItems: 'center',
    backgroundColor: '#7540EE20',
    borderColor: '#7540EE20',
    borderRadius: 30,
    borderWidth: 1,
  },

  lottie: {
    width: 100,
    height: 300,
  },
});
