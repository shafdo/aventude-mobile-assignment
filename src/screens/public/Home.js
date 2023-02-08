import React, { useEffect, useState } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { styles } from '../../styles/_index';
import { Card, Button, TextInput } from 'react-native-paper';
import { ProductsApi } from '../../api/product.api';
import { SearchProductApi } from '../../api/search.api';
import Icon from 'react-native-vector-icons/Feather';

const HomeScreen = ({ navigation }) => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchSwitch, setSearchSwitch] = useState(false);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const res = await ProductsApi()
      .then((response) => {
        return response;
      })
      .catch((error) => {
        return error.response;
      });
    setSearchSwitch(false);
    setProducts(res.data);
  };

  const searchProductName = async () => {
    if (searchTerm.length <= 1) return getProducts();

    const res = await SearchProductApi(searchTerm)
      .then((response) => {
        return response;
      })
      .catch((error) => {
        return error.response;
      });

    setSearchSwitch(true);

    if (res.status != 200) return setProducts([]);
    setProducts(res.data);
  };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={{ ...styles.container }}>
        <View style={{ ...styles.flexCenter, flexWrap: 'wrap', marginVertical: 40 }}>
          <TextInput style={{ ...styles.searchbox, width: '85%', fontSize: 18, marginBottom: 20 }} placeholder="Search for product" left={<TextInput.Icon icon="magnify" />} onChangeText={(text) => setSearchTerm(text)} />
          <Button icon="magnify" mode="contained" onPress={() => searchProductName()} style={{ width: '50%' }}>
            Search
          </Button>
        </View>

        {searchSwitch ? <Text style={{ ...styles.heading3, textAlign: 'center', marginTop: 10, marginBottom: 30 }}>{"Search Results for '" + searchTerm + "'"}</Text> : <Text style={{ ...styles.heading2, textAlign: 'center', marginVertical: 10 }}>All Products</Text>}

        {products.length <= 0 ? (
          <View style={{ marginVertical: 40 }}>
            <View style={{ ...styles.flexCenter, flexWrap: 'wrap' }}>
              <Icon name="box" size={50} />
            </View>
            <Text style={{ ...styles.paragraph, textAlign: 'center', marginVertical: 10 }}>No products found.</Text>
          </View>
        ) : (
          ''
        )}

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
