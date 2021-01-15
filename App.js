import React from 'react';
import {
  StyleSheet,
  Text,
  Platform,
  SafeAreaView,
  Alert,
  Button,
  TouchableOpacity,
  View,
} from 'react-native';
import colors from "./colorScheme";

export default function App(){
  // console.log('React native debugging');
  function getLog() {
    console.log('Text pressed');
    Alert.alert('text pressed!', 'to should have pressed the text');
  }
  return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.title} onPress={() => getLog()}>
          Login
        </Text>
        
        <TouchableOpacity
            style={[styles.buttonContents, styles.buttonFacebook]}
            onPress={() => {
              console.log('Button pressed');
            }}>
          <Text
              style={styles.buttonText}
              accessibilityLabel="Sign up with Facebook button">
            Sign up with Facebook
          </Text>
        </TouchableOpacity>
        
        <TouchableOpacity
            style={[styles.buttonContents, styles.buttonLinkedIn]}
            onPress={() => {
              console.log('Button pressed');
            }}>
          <Text
              style={styles.buttonText}
              accessibilityLabel="Sign up with LinkedIn button">
            Sign up with LinkedIn
          </Text>
        </TouchableOpacity>
        
        <View style={[styles.buttonContents, styles.row]}>
          <View style={styles.horizontal} />
          <View>
            <Text style={styles.horizontalText}>or</Text>
          </View>
          <View style={styles.horizontal} />
        </View>
        
        <TouchableOpacity
            style={[styles.buttonContents, styles.buttonEmail]}
            onPress={() => {
              console.log('Button pressed');
            }}>
          <Text
              style={styles.buttonText}
              accessibilityLabel="Sign up with Email button">
            Sign up using Email
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    fontFamily: 'Roboto',
    //MarginTop needed for ios, for text not to be next to notch
    marginTop: Platform.OS === 'ios' ? 32 : 0,
    //Not a normal css property, part of react native enhancements
    // paddingHorizontal: 24,
    flex: 1,
    // flexDirection: 'column',
    // alignItems: 'center',
    backgroundColor: colors.grey,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: colors.black,
    position: 'absolute',
    top: 0,
    right: 0,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  horizontal: {
    flex: 1,
    height: 1,
    backgroundColor: 'black',
  },
  horizontalText: {
    width: 50,
    fontSize: 27,
    textAlign: 'center',
  },
  buttonText: {
    fontSize: 20,
    color: colors.white,
  },
  buttonContents: {
    alignItems: 'center',
    padding: 10,
    marginRight: '10%',
    marginLeft: '10%',
    marginBottom: '7%',
  },
  buttonFacebook: {
    backgroundColor: '#4267B2',
  },
  buttonLinkedIn: {
    backgroundColor: '#2867B2',
  },
  buttonEmail: {
    backgroundColor: 'rgba(0, 0, 0, 0.70)',
  },
});
