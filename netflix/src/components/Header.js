import React from 'react';
import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const Header = (props) => {
  return (
    <View style={styles.container}>
      <Image source={props.source} style={styles.logo} />
      <Text style={styles.text}>Sign In</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: width * 0.05,
    marginTop: width * 0.1,
    marginBottom: width * 0.05,
    justifyContent: 'space-between',
  },
  logo: {
    width: width * 0.35,
    height: height * 0.06,
  },
  text: {
    color: '#fdfdfd',
    fontWeight: 'bold',
    fontSize: 50,
  },
});

export {Header};
