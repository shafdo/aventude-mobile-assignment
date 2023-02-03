import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/public/Home';
import ProductScreen from '../screens/public/Product';

const HomeNavigator = () => {
  const HomeStack = createNativeStackNavigator();

  return (
    <HomeStack.Navigator initialRouteName="Product Catalog">
      <HomeStack.Screen name="Product Catalog" component={HomeScreen}></HomeStack.Screen>
      <HomeStack.Screen name="Product" component={ProductScreen}></HomeStack.Screen>
    </HomeStack.Navigator>
  );
};

export default HomeNavigator;
