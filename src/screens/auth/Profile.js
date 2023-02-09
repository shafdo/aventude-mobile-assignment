import { useEffect, useState, useCallback } from 'react';
import { Text, ScrollView, View, RefreshControl } from 'react-native';
import { Card, Button } from 'react-native-paper';
import { SvgUri } from 'react-native-svg';
import { useSelector } from 'react-redux';
import { GetOrdersApi } from '../../api/order.api';
import Icon from 'react-native-vector-icons/Feather';
import { styles } from '../../styles/_index';

const ProfileScreen = ({ route }) => {
  const { email } = useSelector((state) => state.user.value);
  const uri = `https://api.dicebear.com/5.x/initials/svg?radius=50&seed=${email}`;

  const [orders, setOrders] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

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

    if (res.status != 200) return;
    return setOrders(res.data);
  };

  // Refesh orders
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    console.log('exec');
    getUserOrders();

    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  return (
    <ScrollView style={{ flex: 1, backgroundColor: 'white' }} refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
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
          const orderStatus = userOrder.order.orderStatus.toLowerCase();
          switch (orderStatus) {
            case 'complete':
              return (
                <Card style={{ ...styles.card, backgroundColor: '#00B96B' }}>
                  <Card.Content style={{ ...styles.cardContent }}>
                    <View style={{ marginBottom: 20 }}>
                      <Card.Title titleVariant="titleLarge" titleStyle={{ ...styles.cardTitle, textDecorationLine: 'line-through' }} title={userOrder.product.productName}></Card.Title>
                      <Text style={{ ...styles.paragraph, marginVertical: 5, marginHorizontal: 18, textTransform: 'capitalize' }}>{'Order Status: ' + userOrder.order.orderStatus}</Text>
                      <Text style={{ ...styles.paragraph, marginVertical: 5, marginHorizontal: 18 }}>{'Order Qty: ' + userOrder.order.orderQty}</Text>
                    </View>
                  </Card.Content>
                </Card>
              );

            case 'processing':
              return (
                <Card style={{ ...styles.card, backgroundColor: '#F2BD27' }}>
                  <Card.Content style={{ ...styles.cardContent }}>
                    <View style={{ marginBottom: 20 }}>
                      <Card.Title titleVariant="titleLarge" titleStyle={{ ...styles.cardTitle }} title={userOrder.product.productName}></Card.Title>
                      <Text style={{ ...styles.paragraph, marginVertical: 5, marginHorizontal: 18, textTransform: 'capitalize' }}>{'Order Status: ' + userOrder.order.orderStatus}</Text>
                      <Text style={{ ...styles.paragraph, marginVertical: 5, marginHorizontal: 18 }}>{'Order Qty: ' + userOrder.order.orderQty}</Text>
                    </View>
                  </Card.Content>
                </Card>
              );

            case 'shipped':
              return (
                <Card style={{ ...styles.card, backgroundColor: '#6fabff' }}>
                  <Card.Content style={{ ...styles.cardContent }}>
                    <View style={{ marginBottom: 20 }}>
                      <Card.Title titleVariant="titleLarge" titleStyle={{ ...styles.cardTitle }} title={userOrder.product.productName}></Card.Title>
                      <Text style={{ ...styles.paragraph, marginVertical: 5, marginHorizontal: 18, textTransform: 'capitalize' }}>{'Order Status: ' + userOrder.order.orderStatus}</Text>
                      <Text style={{ ...styles.paragraph, marginVertical: 5, marginHorizontal: 18 }}>{'Order Qty: ' + userOrder.order.orderQty}</Text>
                    </View>
                  </Card.Content>
                </Card>
              );
          }
        })}
      </View>
    </ScrollView>
  );
};

export default ProfileScreen;
