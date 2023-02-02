import { createNativeStackNavigator } from '@react-navigation/native-stack';
import registerScreen from '../screens/register';

const RegisterNavigator = () => {
  const RegisterStack = createNativeStackNavigator();
  return (
    <RegisterStack.Navigator>
      <RegisterStack.Screen name="Register" component={registerScreen}></RegisterStack.Screen>
    </RegisterStack.Navigator>
  );
};

export default RegisterNavigator;
