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
    console.log('click!');
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
      <>
        <View style={styles.logo}>
          <Logo />
          <Text style={{ color: 'red', textAlign: 'center' }}>{error}</Text>
        </View>
        <View style={styles.container}>
          <Text style={{ fontFamily: 'SF-Bold', fontSize: 24, color: '#25265E', padding: 20 }}>
            Hello!
          </Text>
          <Text
            style={{
              bottom: '15%',
              fontFamily: 'SF-Medium',
              fontSize: 16,
              color: '#787993',
              padding: 20,
            }}
          >
            Glad to have you onbroad! Log in {'\n'} to start using the app.
          </Text>
        </View>
        <View style={{ left: '10%', top: '3%' }}>
          <InputField
            style={{ fontFamily: 'MaisonMedium' }}
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
        </View>
        <View style={{ alignItems: 'flex-start', top: '5%', left: '7%' }}>
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
              <Text style={{ fontFamily: 'SF-Bold', fontSize: 16, color: '#7540EE' }}>Login</Text>
            )}
          </TouchableOpacity>
        </View>
        <View style={{ alignItems: 'flex-end', bottom: '1%', right: '10%' }}>
          <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
            <Text style={{ color: '#7540EE', fontSize: 16, fontFamily: 'SF-Medium' }}>
              Forgot password?
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ alignSelf: 'center', top: '8%' }}>
          <Text style={{ fontFamily: 'SF-Medium', color: '#787993', fontSize: 16 }}>
            Still without account?
            <Text style={{ fontFamily: 'SF-Medium', color: '#FF7052', fontSize: 16 }}>
              {''} Create one
            </Text>
          </Text>
        </View>
      </>
    );
  }
}
export default LoginScreen;

const styles = StyleSheet.create({
  logo: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    margin: 40,
    top: '10%',
  },
  container: {
    alignItems: 'flex-start',
    padding: 20,
    top: '6%',
  },
  button: {
    margin: 10,
    paddingVertical: 12,
    width: '26%',
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
