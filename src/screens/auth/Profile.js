import { useEffect, useState } from 'react';
import { Text, ScrollView, View } from 'react-native';
import { Card, Button } from 'react-native-paper';
import { SvgUri } from 'react-native-svg';
import { useSelector } from 'react-redux';
import { GetOrdersApi } from '../../api/order.api';
import Icon from 'react-native-vector-icons/Feather';
import { styles } from '../../styles/_index';

const ProfileScreen = ({ route }) => {
  const { uid, email } = useSelector((state) => state.user.value);
  const uri = `https://api.dicebear.com/5.x/initials/svg?radius=50&seed=${email}`;

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    getUserOrders();
  }, []);

  const getUserOrders = async () => {
    const res = await GetOrdersApi()
      .then((response) => {
        return response;
      })
      .catch((error) => {
        return error.response;
      });

    if (res.status != 200) return setOrders([]);
    return setOrders(res.data);
  };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={{ ...styles.flexCenter, marginTop: 50 }}>
        <SvgUri width="150" height="150" uri={uri} />
      </View>
      <Text style={{ ...styles.heading4, textAlign: 'center' }}>{email}</Text>

      <View style={{ paddingHorizontal: 10 }}>
        <Text style={{ ...styles.heading2, marginTop: 10, marginBottom: 40 }}>Your Orders:</Text>

        {orders.length <= 0 ? (
          <View style={{ marginVertical: 40 }}>
            <View style={{ ...styles.flexCenter, flexWrap: 'wrap' }}>
              <Icon name="box" size={50} />
            </View>
            <Text style={{ ...styles.paragraph, textAlign: 'center', marginVertical: 10 }}>No Orders found.</Text>
          </View>
        ) : (
          ''
        )}

        {orders.map((userOrder) => {
          return (
            <Card style={{ ...styles.card }}>
              <Card.Content style={{ ...styles.cardContent }}>
                <View style={{ marginBottom: 20 }}>
                  <Card.Title titleVariant="titleLarge" titleStyle={{ ...styles.cardTitle }} title={userOrder.product.productName}></Card.Title>
                  <Text style={{ ...styles.paragraph, marginVertical: 5, marginHorizontal: 18 }}>{'Order Status: ' + userOrder.order.orderStatus}</Text>
                  <Text style={{ ...styles.paragraph, marginVertical: 5, marginHorizontal: 18 }}>{'Order Qty: ' + userOrder.order.orderQty}</Text>
                </View>
              </Card.Content>
            </Card>
          );
        })}
      </View>
    </ScrollView>
  );
};

export default ProfileScreen;
