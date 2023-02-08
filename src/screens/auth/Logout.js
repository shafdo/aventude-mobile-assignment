import { useState } from 'react';
import { Button, Dialog, Text } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/store';

const LogoutScreen = ({ navigation, route }) => {
  const dispatch = useDispatch();

  const redirectToHome = () => {
    return navigation.navigate('Home', { screen: 'Catalog' });
  };

  const logoutUser = () => {
    dispatch(logout());
    setTimeout(() => {
      return navigation.navigate('Login');
    }, 5);
  };

  return (
    <Dialog visible={true}>
      <Dialog.Title>Confirm Logout?</Dialog.Title>
      <Dialog.Content>
        <Text variant="bodyMedium">Are you sure you want to logout?</Text>
      </Dialog.Content>
      <Dialog.Actions>
        <Button onPress={() => redirectToHome()}>Cancel</Button>
        <Button onPress={() => logoutUser()}>Yes</Button>
      </Dialog.Actions>
    </Dialog>
  );
};

export default LogoutScreen;
