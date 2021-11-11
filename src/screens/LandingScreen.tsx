import React from 'react';
import * as Sentry from "@sentry/react-native";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

type LandingScreenProps = {};
const SplashScreen = ({}: LandingScreenProps) => (
  <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
    <Text style={{fontSize: 24, fontFamily: 'ProximaNova-Regular'}}>Semaa Regular</Text>
    <Text style={{fontSize: 24, fontFamily: 'ProximaNova-Bold'}}>Semaa Bold</Text>
    <Text style={{fontSize: 24, fontFamily: 'ProximaNovaA-Regular'}}>Semaa Alt Regular</Text>
    <Text style={{fontSize: 24, fontFamily: 'ProximaNovaA-Bold'}}>Semaa Alt Bold</Text>
    <Text style={{fontSize: 24, fontFamily: 'ProximaNovaA-Light'}}>Semaa Alt Light</Text>
    <Text style={{fontSize: 24, fontFamily: 'NotoNastaliqUrdu-Bold'}}>سماء</Text>
    <Text style={{fontSize: 24, fontFamily: 'NotoNastaliqUrdu-Regular'}}>سماء</Text>
  </View>
);

const LandingScreen = SplashScreen;
export {LandingScreen};
