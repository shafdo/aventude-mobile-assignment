import { Text, View, ScrollView } from 'react-native';
import { Card, Button } from 'react-native-paper';
import { styles } from '../../styles/_index';

const ProductScreen = ({ route, navigation }) => {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={{ ...styles.container }}>
        <Text style={{ ...styles.heading2, textAlign: 'center' }}>{route.params.product.title}</Text>

        <Card style={{ ...styles.card }}>
          <Card.Cover source={{ uri: route.params.product.thumbnail }} />
        </Card>

        <Text style={{ marginBottom: 40, ...styles.paragraph }}>{route.params.product.description}</Text>
        <Button icon="cart-check" mode="contained" style={{ marginBottom: 40 }} onPress={() => navigation.navigate('Home', { screen: 'Checkout', params: { product: route.params.product } })}>
          Buy Now
        </Button>
      </View>
    </ScrollView>
  );
};

export default ProductScreen;
