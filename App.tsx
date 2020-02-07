import React from 'react';
import { StyleSheet, Text, View, Button, TouchableHighlight } from 'react-native';
import FadeAnimation from './src/components/FadeAnimation/FadeAnimation';

export default function App() {
  return (
    <View style={styles.container}>
      <FadeAnimation />
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
