import React, { useEffect, useState } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { styles } from '../../styles/_index';
import { Card, Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Feather';
import { useSelector } from 'react-redux';

const SearchScreen = ({ navigation, route }) => {
  const reduxSearchProducts = useSelector((state) => state.searchProducts.value.data);
  const searchTerm = route.params.searchTerm;

  const [searchProducts, setSearchProducts] = useState(reduxSearchProducts);

  useEffect(() => {
    console.log('Search useEffect running');
    setSearchProducts(reduxSearchProducts);
  }, [reduxSearchProducts]);

  return (
    <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={{ ...styles.container }}>
        <Text style={{ ...styles.heading3, textAlign: 'center', marginTop: 75, marginBottom: 10 }}>{"Search Results for '" + searchTerm + "'"}</Text>

        {/* No products found block */}
        {searchProducts.length <= 0 ? (
          <View style={{ marginVertical: 40 }}>
            <View style={{ ...styles.flexCenter, flexWrap: 'wrap' }}>
              <Icon name="box" size={50} />
            </View>
            <Text style={{ ...styles.paragraph, textAlign: 'center', marginVertical: 10 }}>No products found.</Text>
          </View>
        ) : (
          ''
        )}

        {/* Loop products */}
        {searchProducts.map((product) => {
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

export default SearchScreen;
