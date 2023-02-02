import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import LoginScreen from '../screens/login';
import registerScreen from '../screens/register';
import HomeScreen from '../screens/home';

const DrawerNavigator = () => {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeScreen}></Drawer.Screen>
      <Drawer.Screen name="Register" component={registerScreen}></Drawer.Screen>
      <Drawer.Screen name="Login" component={LoginScreen}></Drawer.Screen>
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
