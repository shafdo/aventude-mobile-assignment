import React, { useEffect, useState } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { styles } from '../../styles/_index';
import { Card, Button, TextInput } from 'react-native-paper';
import { ProductsApi } from '../../api/product.api';

const HomeScreen = ({ navigation }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const res = await ProductsApi()
        .then((response) => {
          return response;
        })
        .catch((error) => {
          return error.response;
        });
      setProducts(res.data);
    };
    getProducts();
  }, []);

  return (
    <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={{ ...styles.container }}>
        <Text style={{ ...styles.heading2, textAlign: 'center' }}>Products</Text>

        <View style={{ ...styles.flexCenter, marginBottom: 40 }}>
          <TextInput style={{ width: '85%', fontSize: 18 }} placeholder="Search for product" left={<TextInput.Icon icon="magnify" />} />
        </View>

        {products.map((product) => {
          return (
            <Card style={{ ...styles.card }}>
              <Card.Cover source={{ uri: product.productThumbnail }} />
              <Card.Content style={{ ...styles.cardContent }}>
                <Card.Title titleVariant="titleLarge" titleStyle={{ ...styles.cardTitle }} title={product.productName} subtitle={product.productDesc}></Card.Title>

                <View style={{ ...styles.cardUnitWrapper }}>
                  <Text style={{ ...styles.cardPrice }}>{'$ ' + product.productPrice}</Text>
                  <Button icon="bucket-outline" mode="contained-tonal" labelStyle={{ ...styles.cardStock }}>
                    {product.productStock}
                  </Button>
                </View>

                <View style={{ ...styles.flexCenter }}>
                  <Button icon="magnify" mode="contained" labelStyle={{ ...styles.cardGotoProduct }} onPress={() => navigation.navigate('Home', { screen: 'Product', params: { product } })}>
                    View Product
                  </Button>
                </View>
              </Card.Content>
            </Card>
          );
        })}
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
