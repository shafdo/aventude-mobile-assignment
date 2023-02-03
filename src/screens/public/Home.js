import React, { useEffect, useState } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { styles } from '../../styles/_index';
import { Card, Button } from 'react-native-paper';
import productData from '../../assets/data/productsData.json';

const HomeScreen = ({ navigation }) => {
  const [products, setProducts] = useState({});

  return (
    <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={{ ...styles.container }}>
        <Text style={{ ...styles.heading2, textAlign: 'center' }}>Products</Text>

        {productData.map((product) => {
          return (
            <Card style={{ ...styles.card }}>
              <Card.Cover source={{ uri: product.thumbnail }} />
              <Card.Content style={{ ...styles.cardContent }}>
                <Card.Title titleVariant="titleLarge" titleStyle={{ ...styles.cardTitle }} title={product.title} subtitle={product.description}></Card.Title>

                <View style={{ ...styles.cardUnitWrapper }}>
                  <Text style={{ ...styles.cardPrice }}>{'$ ' + product.price}</Text>
                  <Button icon="bucket-outline" mode="contained-tonal" labelStyle={{ ...styles.cardStock }}>
                    {product.stock}
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
