import { useEffect, useState } from 'react';
import { Text, View, ScrollView, Alert } from 'react-native';
import { Card, Button, Divider, TextInput, Dialog } from 'react-native-paper';
import { Icon } from 'react-native-elements';
import { styles } from '../../styles/_index';
import { useSelector } from 'react-redux';
import { PlaceOrderApi } from '../../api/order.api';
import { DefaultLoader } from '../../components/Loader';

const CheckoutScreen = ({ navigation, route }) => {
  const [qty, setQty] = useState(1);
  const [total, setTotal] = useState(route.params.product.productPrice);
  const [isLoading, setIsLoading] = useState(false);

  const [alertVisible, setAlertVisible] = useState(false);
  const [alertTitle, setAlertTitle] = useState('');
  const [alertMsg, setAlertMsg] = useState('');

  const showAlert = (title, msg) => {
    setAlertVisible(true);
    setAlertTitle(title);
    setAlertMsg(msg);
    return;
  };

  const { isLoggedIn } = useSelector((state) => state.user.value);
  const productId = route.params.product.productId;

  // useEffect Functions
  useEffect(() => {
    if (!isLoggedIn) return showAlert('Error', 'You must login before placing order.');
  }, [isLoggedIn]);

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
  // useEffect Functions End

  const showError = (title, desc) => {
    return Alert.alert(title, desc, [{ text: 'OK' }]);
  };

  const redirectToLogin = () => {
    setAlertVisible(false);
    if (isLoggedIn) return;
    return navigation.navigate('Login');
  };

  const placeOrder = async () => {
    setIsLoading(true);
    const res = await PlaceOrderApi(productId, qty)
      .then((response) => {
        return response;
      })
      .catch((error) => {
        return error.response;
      });

    setIsLoading(false);

    if (res.status != 200) return showAlert('Error', res.data);
    return showAlert('Success', res.data);
  };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
      <DefaultLoader animating={isLoading}></DefaultLoader>

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
          <Button mode="contained" onPress={() => placeOrder()}>
            Pay Now
          </Button>
        </View>
      </View>

      {/* Alerts */}
      <Dialog visible={alertVisible}>
        <Dialog.Title>{alertTitle}</Dialog.Title>
        <Dialog.Content>
          <Text variant="bodyMedium">{alertMsg}</Text>
        </Dialog.Content>
        <Dialog.Actions>
          <Button onPress={() => redirectToLogin()}>Ok</Button>
        </Dialog.Actions>
      </Dialog>
    </ScrollView>
  );
};

export default CheckoutScreen;
