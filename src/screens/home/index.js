import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import { styles } from '../../styles/_index';
import { Card } from 'react-native-paper';

const HomeScreen = () => {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={{ ...styles.container }}>
        <Text style={{ ...styles.heading2, textAlign: 'center' }}>Products</Text>

        <Card style={{ ...styles.card }}>
          <Card.Cover source={{ uri: 'https://source.unsplash.com/0BKZfcamvGg' }} />
          <Card.Content style={{ ...styles.cardContent }}>
            <Card.Title titleVariant="titleLarge" titleStyle={{ ...styles.cardTitle }} title="Card Title" subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam eveniet voluptatem, eligendi nam voluptate minus fugiat quis autem ducimus pariatur similique hic odio beatae aut dolore iure quam, asperiores omnis?"></Card.Title>
          </Card.Content>
        </Card>

        <Card>
          <Card.Cover source={{ uri: 'https://source.unsplash.com/s-gYAbQToXk' }} />
          <Card.Content style={{ ...styles.cardContent }}>
            <Card.Title titleVariant="titleLarge" titleStyle={{ ...styles.cardTitle }} title="Card Title" subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam eveniet voluptatem, eligendi nam voluptate minus fugiat quis autem ducimus pariatur similique hic odio beatae aut dolore iure quam, asperiores omnis?"></Card.Title>
          </Card.Content>
        </Card>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
