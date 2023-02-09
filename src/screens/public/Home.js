import React, { useEffect, useState } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { styles } from '../../styles/_index';
import { Card, Button, TextInput } from 'react-native-paper';
import { ProductsApi } from '../../api/product.api';
import { SearchProductApi } from '../../api/search.api';
import Icon from 'react-native-vector-icons/Feather';
import { DefaultLoader } from '../../components/Loader';
import { useSelector, useDispatch } from 'react-redux';
import { clearProducts, addProducts } from '../../redux/store';

const HomeScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const reduxProducts = useSelector((state) => state.products.value.data);

  const [products, setProducts] = useState(reduxProducts);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResetSwitch, setSearchResetSwitch] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    console.log('useEffect running');
    getProducts();
  }, []);

  const getProducts = async () => {
    setIsLoading(true);
    const res = await ProductsApi()
      .then((response) => {
        return response;
      })
      .catch((error) => {
        return error.response;
      });

    setIsLoading(false);
    setSearchResetSwitch(false);
    // dispatch(addProducts({ data: res.data }));
    console.log('This is from Home');
    console.log(reduxProducts);
    setProducts(reduxProducts);
    setSearchTerm('');
  };

  const searchProductName = async () => {
    if (searchTerm.length <= 1) return;

    setIsLoading(true);
    dispatch(clearProducts());
    setProducts(reduxProducts);
    const res = await SearchProductApi(searchTerm)
      .then((response) => {
        return response;
      })
      .catch((error) => {
        return error.response;
      });

    setIsLoading(false);
    setSearchResetSwitch(true);

    if (res.status != 200) return setProducts([]);
    dispatch(addProducts({ data: res.data }));
    setProducts(reduxProducts);
  };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
      <DefaultLoader animating={isLoading}></DefaultLoader>

      <View style={{ ...styles.container }}>
        {/* Searchbox */}
        <View style={{ ...styles.flexCenter, flexWrap: 'wrap', marginTop: 40 }}>
          <TextInput style={{ ...styles.searchbox, width: '85%', fontSize: 18 }} placeholder="Search for product" left={<TextInput.Icon icon="magnify" />} onChangeText={(text) => setSearchTerm(text)} value={searchTerm} />
        </View>

        <View style={{ ...styles.flexCenter, marginVertical: 40 }}>
          {/* Reset Search Input (searchResetSwitch) */}
          {searchResetSwitch ? (
            <Button icon="trash-can-outline" mode="contained" onPress={() => getProducts()} buttonColor="#ff5144" style={{ width: '35%', marginHorizontal: 10 }}>
              Reset
            </Button>
          ) : (
            ''
          )}

          {/* Search Button */}
          <Button icon="magnify" mode="contained" onPress={() => searchProductName()} style={{ width: '50%', marginHorizontal: 10 }}>
            Search
          </Button>
        </View>

        {/* () Search result block (searchResetSwitch) */}
        {!isLoading && searchResetSwitch ? <Text style={{ ...styles.heading3, textAlign: 'center', marginVertical: 10 }}>{"Search Results for '" + searchTerm + "'"}</Text> : <Text style={{ ...styles.heading2, textAlign: 'center', marginTop: 10, marginBottom: 40 }}>All Products</Text>}

        {/* No products found block */}
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

        {/* Loop products */}
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
