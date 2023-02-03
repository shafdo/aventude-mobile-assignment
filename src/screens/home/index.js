import React, { useEffect, useState } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { Link } from '@react-navigation/native';
import { styles } from '../../styles/_index';
import { Card, Button } from 'react-native-paper';
import productData from '../../assets/data/productsData.json';

const HomeScreen = () => {
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

                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
                  <Link to={{ screen: 'Register' }}>
                    <Button icon="magnify" mode="contained" labelStyle={{ ...styles.cardGotoProduct }}>
                      View Product
                    </Button>
                  </Link>
                </View>
              </Card.Content>
            </Card>
          );
        })}

        {/* <Card style={{ ...styles.card }}>
          <Card.Cover source={{ uri: 'https://source.unsplash.com/0BKZfcamvGg' }} />
          <Card.Content style={{ ...styles.cardContent }}>
            <Card.Title titleVariant="titleLarge" titleStyle={{ ...styles.cardTitle }} title="Card Title" subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam eveniet voluptatem, eligendi nam voluptate minus fugiat quis autem ducimus pariatur similique hic odio beatae aut dolore iure quam, asperiores omnis?"></Card.Title>

            <View style={{ ...styles.cardUnitWrapper }}>
              <Text style={{ ...styles.cardPrice }}>$ 50</Text>
              <Button icon="bucket-outline" mode="contained-tonal" labelStyle={{ ...styles.cardStock }}>
                10
              </Button>
            </View>
          </Card.Content>
        </Card> */}
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
