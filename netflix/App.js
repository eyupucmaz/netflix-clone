import React, {Component} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  Image,
  StyleSheet,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {Header, Inputs, Buttons, CheckBox, Facebook} from './src/components';

const {width, height} = Dimensions.get('window');

export default class App extends Component {
  state = {
    username: '',
    password: '',
    rememberMe: false,
  };
  render() {
    const {username, password, rememberMe} = this.state;
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={{flex: 1}}>
          {/* HEADER SECTION */}

          <View style={{flex: 0.3}}>
            <Header source={require('./src/image/netflix-logo.png')} />
          </View>
          {/* FORM SECTION */}

          <View style={[{flex: 0.3}, styles.subContainer]}>
            <Inputs
              placeholder={'Email or phone number'}
              keyboardType={'email-address'}
              onChangeText={(username) => this.setState({username})}
            />
            <Inputs
              placeholder={'Password'}
              secureTextEntry={true}
              keyboardType={'numeric'}
              onChangeText={(password) => this.setState({password})}
              value={password}
            />
            <Buttons text={'Sign In'} />
          </View>

          {/* HELP SECTION */}
          <View style={styles.help}>
            <CheckBox
              status={rememberMe}
              onPress={() => this.setState({rememberMe: !rememberMe})}
            />
            <TouchableOpacity activeOpacity={0.5}>
              <Text style={[{color: 'gray', fontSize: 16, marginLeft: 15}]}>
                Need help?
              </Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              flex: 0.2,
              flexDirection: 'row',
              alignItems: 'flex-end',
              marginBottom: height * 0.025,
            }}>
            <Facebook
              title={'Login with Facebook'}
              source={require('./src/image/facebook-logo.png')}
            />
          </View>
          <View
            style={{
              flex: 0.08,
              flexDirection: 'row',
              marginLeft: width * 0.05,
            }}>
            <Text style={styles.text}>New to Netflix?</Text>
            <TouchableOpacity>
              <Text style={[styles.text, {marginLeft: 8, color: '#fff'}]}>
                Sign up now.
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  subContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: width * 0.35,
    height: height * 0.06,
  },
  help: {
    flex: 0.05,
    flexDirection: 'row',
    marginLeft: width * 0.05,
    marginRight: width * 0.05,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    color: 'gray',
    fontSize: 20,
  },
});
