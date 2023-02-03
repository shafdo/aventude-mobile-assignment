import React, { useCallback, useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AppNavigationContainer from './src/navigations';
import * as SplashScreen from 'expo-splash-screen';

export default function App() {
  return <AppNavigationContainer></AppNavigationContainer>;
}
