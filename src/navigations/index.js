import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './DrawerNavigator';
import LoginNavigator from './LoginNavigator';
import RegisterNavigator from './RegisterNavigator';

const AppNavigationContainer = () => {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
};

export default AppNavigationContainer;
