import React from 'react';
import { StyleSheet, Text, View, Button, TouchableHighlight, TouchableWithoutFeedback } from 'react-native';
import FadeAnimation from './src/components/FadeAnimation/FadeAnimation';
import TranslateAnimation from './src/components/TranslateAnimation/TranslateAnimation';
import ScaleAnimation from './src/components/ScaleAnimation/ScaleAnimation';
import HeightAnimation from './src/components/HeightAnimation/HeightAnimation';
import InterpolationAnimation from './src/components/InterpolationAnimation/InterpolationAnimation';
import RotateInterpolation from './src/components/RotateInterpolation/RotateInterpolation';
import WidthPercentage from './src/components/WidthPercentage/WidthPercentage';
import EasingAnimation from './src/components/EasingAnimation/EasingAnimation';
import SpringAnimation from './src/components/SpringAnimation/SpringAnimation';
import EventAnimation from './src/components/EventAnimation/EventAnimation';
import PanHandlerAnimation from './src/components/PanHandlerAnimation/PanHandlerAnimation';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <FadeAnimation /> */}
      {/* <TranslateAnimation/> */}
      {/* <ScaleAnimation/> */}
      {/* <HeightAnimation/> */}
      {/* <InterpolationAnimation/> */}
      {/* <RotateInterpolation/> */}
      {/* <WidthPercentage/> */}
      {/* <EasingAnimation/> */}
      {/* <SpringAnimation/> */}
      {/* <EventAnimation/> */}
      <PanHandlerAnimation/>
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
