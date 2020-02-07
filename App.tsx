import React from 'react';
import { StyleSheet, Text, View, Button, TouchableHighlight, TouchableWithoutFeedback } from 'react-native';
import FadeAnimation from './src/components/FadeAnimation/FadeAnimation';
import TranslateAnimation from './src/components/TranslateAnimation/TranslateAnimation';
import ScaleAnimation from './src/components/ScaleAnimation/ScaleAnimation';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <FadeAnimation /> */}
      {/* <TranslateAnimation/> */}
      <ScaleAnimation/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
