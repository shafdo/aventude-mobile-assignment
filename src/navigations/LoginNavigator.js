import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/login';

const LoginNavigator = () => {
  const LoginStack = createNativeStackNavigator();

  return (
    <LoginStack.Navigator>
      <LoginStack.Screen name="Login" component={LoginScreen}></LoginStack.Screen>
    </LoginStack.Navigator>
  );
};

export default LoginNavigator;
