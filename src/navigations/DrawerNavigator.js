import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import LoginScreen from '../screens/public/Login';
import registerScreen from '../screens/public/Register';
import HomeNavigator from './HomeStackNavigator';

const DrawerNavigator = () => {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator initialRouteName="Login">
      <Drawer.Screen name="Home" component={HomeNavigator} options={{ headerTitle: '' }}></Drawer.Screen>
      <Drawer.Screen name="Register" component={registerScreen}></Drawer.Screen>
      <Drawer.Screen name="Login" component={LoginScreen}></Drawer.Screen>
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
