import { Text, View, ScrollView } from 'react-native';
import { Card, Button, Divider, TextInput } from 'react-native-paper';
import { styles } from '../../styles/_index';

const CheckoutScreen = ({ route }) => {
  //   console.log(route);
  return (
    <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={{ ...styles.container, marginBottom: 0 }}>
        <Text style={{ ...styles.heading2, textAlign: 'center', marginBottom: 0 }}>Checkout</Text>

        <View>
          <Text style={{ ...styles.heading3, marginBottom: 15 }}>Order Summary</Text>
          <Text style={{ ...styles.paragraph, marginBottom: 30 }}>Here is a summary of your order</Text>
        </View>

        <View>
          <Card style={{ ...styles.card, marginBottom: 0 }}>
            <Card.Cover source={{ uri: route.params.product.thumbnail }} />
          </Card>
          <Text style={{ ...styles.heading3, marginBottom: 0, marginTop: 20 }}>{route.params.product.title}</Text>

          <View style={{ ...styles.flexBetween }}>
            <Text style={{ ...styles.heading2, marginBottom: 10, marginTop: 8 }}>{'$ ' + route.params.product.price}</Text>
            <View style={{ ...styles.flexEnd, ...styles.alignCenter }}>
              <Text style={{ ...styles.heading3, marginTop: 0, marginBottom: 0 }}>-</Text>
              <Text style={{ ...styles.heading3, marginTop: 0, marginBottom: 0 }}>1</Text>
              <Text style={{ ...styles.heading3, marginTop: 0, marginBottom: 0 }}>+</Text>
            </View>
          </View>
        </View>

        <Divider horizontalInset={true} bold={true} style={{ ...styles.divider }} />

        <View style={{ ...styles.flexBetween }}>
          <Text style={{ ...styles.paragraph, marginTop: 20, marginBottom: 0 }}>Sub Total</Text>
          <Text style={{ ...styles.paragraph, marginTop: 20, marginBottom: 0 }}>{'$ ' + route.params.product.price}</Text>
        </View>
        <View style={{ ...styles.flexBetween }}>
          <Text style={{ ...styles.paragraph, marginTop: 0 }}>Shipping</Text>
          <Text style={{ ...styles.paragraph, marginTop: 0 }}>$ 0</Text>
        </View>

        <Divider horizontalInset={true} bold={true} style={{ ...styles.divider }} />

        <View style={{ ...styles.flexBetween }}>
          <Text style={{ ...styles.paragraph, marginTop: 0, marginBottom: 10 }}>Total</Text>
          <Text style={{ ...styles.heading3, marginTop: 0, marginBottom: 10 }}>{'$ ' + route.params.product.price}</Text>
        </View>

        <View>
          <Text style={{ ...styles.heading3, marginBottom: 15 }}>Payment Details</Text>
          <TextInput label="Email" value="example@email.com" disabled={true} />
        </View>

        <View style={{ marginTop: 40, marginBottom: 40 }}>
          <Button mode="contained">Pay Now</Button>
        </View>
      </View>
    </ScrollView>
  );
};

export default CheckoutScreen;
