import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/public/Home';
import ProductScreen from '../screens/public/Product';

const HomeNavigator = () => {
  const HomeStack = createNativeStackNavigator();

  return (
    <HomeStack.Navigator initialRouteName="Catalog">
      <HomeStack.Screen name="Catalog" component={HomeScreen}></HomeStack.Screen>
      <HomeStack.Screen name="Product" component={ProductScreen}></HomeStack.Screen>
    </HomeStack.Navigator>
  );
};

export default HomeNavigator;