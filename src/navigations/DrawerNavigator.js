import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import LoginScreen from '../screens/public/Login';
import registerScreen from '../screens/public/Register';
import ProfileScreen from '../screens/auth/Profile';
import LogoutScreen from '../screens/auth/Logout';
import HomeNavigator from './HomeStackNavigator';
import { useSelector } from 'react-redux';

const DrawerNavigator = () => {
  const Drawer = createDrawerNavigator();
  const isLoggedIn = useSelector((state) => state.user.value.isLoggedIn);

  if (isLoggedIn) {
    return (
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeNavigator} options={{ headerTitle: '' }}></Drawer.Screen>
        <Drawer.Screen name="Profile" component={ProfileScreen}></Drawer.Screen>
        <Drawer.Screen name="Logout" component={LogoutScreen}></Drawer.Screen>
      </Drawer.Navigator>
    );
  } else {
    return (
      <Drawer.Navigator initialRouteName="Login">
        <Drawer.Screen name="Home" component={HomeNavigator} options={{ headerTitle: '' }}></Drawer.Screen>
        <Drawer.Screen name="Register" component={registerScreen}></Drawer.Screen>
        <Drawer.Screen name="Login" component={LoginScreen}></Drawer.Screen>
      </Drawer.Navigator>
    );
  }
};

export default DrawerNavigator;
