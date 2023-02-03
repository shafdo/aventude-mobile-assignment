import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import LoginScreen from '../screens/public/login';
import registerScreen from '../screens/public/register';
// import HomeScreen from '../screens/public/home';
import HomeNavigator from './HomeStackNavigator';

const DrawerNavigator = () => {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeNavigator} options={{ headerTitle: '' }}></Drawer.Screen>
      <Drawer.Screen name="Register" component={registerScreen}></Drawer.Screen>
      <Drawer.Screen name="Login" component={LoginScreen}></Drawer.Screen>
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
