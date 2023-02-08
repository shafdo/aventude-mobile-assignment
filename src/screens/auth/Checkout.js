import { useEffect, useState } from 'react';
import { Text, View, ScrollView, Alert } from 'react-native';
import { Card, Button, Divider, TextInput } from 'react-native-paper';
import { Icon } from 'react-native-elements';
import { styles } from '../../styles/_index';

const CheckoutScreen = ({ route }) => {
  const [qty, setQty] = useState(1);
  const [total, setTotal] = useState(route.params.product.productPrice);

  const showError = (title, desc) => {
    return Alert.alert(title, desc, [{ text: 'OK' }]);
  };

  useEffect(() => {
    if (qty < 1) {
      showError('Not allowed', 'You cannot set order quantity less than 1.');
      return setQty(1);
    }

    if (qty > route.params.product.productStock) {
      showError('Not allowed', 'Maximum stock exceeded.');
      return setQty(route.params.product.productStock);
    }

    setTotal(route.params.product.productPrice * qty);
  }, [qty]);

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
            <Card.Cover source={{ uri: route.params.product.productThumbnail }} />
          </Card>
          <Text style={{ ...styles.heading3, marginBottom: 0, marginTop: 20 }}>{route.params.product.productName}</Text>

          <View style={{ ...styles.flexBetween }}>
            <Text style={{ ...styles.heading2, marginBottom: 10, marginTop: 8 }}>{'$ ' + total}</Text>
            <View style={{ ...styles.flexEnd, ...styles.alignCenter }}>
              <Icon name="remove" size={28} onPress={() => setQty(qty - 1)} />
              <Text style={{ ...styles.heading2, marginVertical: 0, paddingHorizontal: 6 }}>{qty}</Text>
              <Icon name="add" size={28} onPress={() => setQty(qty + 1)} />
            </View>
          </View>
        </View>

        <Divider horizontalInset={true} bold={true} style={{ ...styles.divider }} />

        <View style={{ ...styles.flexBetween }}>
          <Text style={{ ...styles.paragraph, marginTop: 20, marginBottom: 0 }}>Sub Total</Text>
          <Text style={{ ...styles.paragraph, marginTop: 20, marginBottom: 0 }}>{'$ ' + total}</Text>
        </View>
        <View style={{ ...styles.flexBetween }}>
          <Text style={{ ...styles.paragraph, marginTop: 0 }}>Shipping</Text>
          <Text style={{ ...styles.paragraph, marginTop: 0 }}>$ 0</Text>
        </View>

        <Divider horizontalInset={true} bold={true} style={{ ...styles.divider }} />

        <View style={{ ...styles.flexBetween }}>
          <Text style={{ ...styles.paragraph, marginTop: 0, marginBottom: 10 }}>Total</Text>
          <Text style={{ ...styles.heading3, marginTop: 0, marginBottom: 10 }}>{'$ ' + total}</Text>
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
