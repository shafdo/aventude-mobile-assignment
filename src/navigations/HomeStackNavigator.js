import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/auth/Home';
import SearchScreen from '../screens/auth/Search';
import ProductScreen from '../screens/public/Product';
import CheckoutScreen from '../screens/auth/Checkout';

const HomeNavigator = () => {
  const HomeStack = createNativeStackNavigator();

  return (
    <HomeStack.Navigator initialRouteName="Catalog">
      <HomeStack.Screen name="Catalog" component={HomeScreen}></HomeStack.Screen>
      <HomeStack.Screen name="Search" component={SearchScreen}></HomeStack.Screen>
      <HomeStack.Screen name="Product" component={ProductScreen}></HomeStack.Screen>
      <HomeStack.Screen name="Checkout" component={CheckoutScreen}></HomeStack.Screen>
    </HomeStack.Navigator>
  );
};

export default HomeNavigator;
