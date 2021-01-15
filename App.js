import React from 'react';
import {
  StyleSheet,
  Text,
  Platform,
  SafeAreaView,
  Alert,
  View,
} from 'react-native';
import colors from "./colorScheme";

export default function App(){
  // console.log('React native debugging');
  function getLog() {
    console.log('Text pressed');
    Alert.alert('text pressed!', 'you should have pressed the text');
  }
  return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.LoginText} onPress={() => getLog()}> Expo Login </Text>
        <View style={[styles.buttonStyles,styles.buttonFacebook]}
        onPress={() => {
              console.log('FB Button pressed');
            }}>
          <Text
              style={styles.buttonText}
              accessibilityLabel="Sign up with Facebook button">
            Sign up with Facebook
          </Text>
        </View>
        <View style={[styles.buttonStyles,styles.buttonLinkedIn]}
        onPress={() => {
              console.log('LinkedIn Button pressed');
            }}>
          <Text
              style={styles.buttonText}
              accessibilityLabel="Sign up with LinkedIn button">
            Sign up with LinkedIn
          </Text>
        </View>

        <View style={[styles.buttonStyles, styles.row]}>
          <View style={styles.dividerLine} />
          <View>
            <Text style={styles.dividerText}>or</Text>
          </View>
          <View style={styles.dividerLine} />
        </View>

        <View style={[styles.buttonStyles,styles.buttonEmail]}
        onPress={() => {
              console.log('Email Button pressed');
            }}>
          <Text
              style={styles.buttonText}
              accessibilityLabel="Sign up with Email button">
            Sign up using Email
          </Text>
        </View>

      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    fontFamily: 'Roboto',
    //MarginTop needed for ios, for text not to be next to notch
    marginTop: Platform.OS === 'android' ? 32 : 0,
    //Not a normal css property, part of react native enhancements
    // paddingHorizontal: 24,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  LoginText: {
    fontSize: 30,
    marginRight: 30,
    fontWeight: 'bold',
    color: '#012e67',
    position: 'absolute',
    top: 0,
    right: 0,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: 'black',
  },
  dividerText: {
    width: 50,
    fontSize: 27,
    textAlign: 'center',
  },
  buttonText: {
    fontSize: 20,
    color: colors.white,
    textAlign:'right',
  },
  buttonStyles: {
    padding: 15,
    margin: 10,
    width: 300,
    borderRadius: 15,
  },
  buttonFacebook: {
    backgroundColor: '#4267B2',
  },
  buttonLinkedIn: {
    backgroundColor: '#2867B2',
  },
  buttonEmail: {
    backgroundColor: 'rgba(0, 0, 0, 0.70)',
    marginBottom: 60,
  },
});
