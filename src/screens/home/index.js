import React from 'react';
import { Text, View } from 'react-native';
import { styles } from '../../styles/_index';
import { Card } from 'react-native-paper';

const HomeScreen = () => {
  return (
    <View style={{ ...styles.container }}>
      <Text style={{ ...styles.heading2, textAlign: 'center' }}>Products</Text>

      <Card>
        <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
        <Card.Content style={{ ...styles.cardContent }}>
          <Card.Title titleVariant="titleLarge" titleStyle={{ ...styles.cardTitle }} title="Card Title" subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam eveniet voluptatem, eligendi nam voluptate minus fugiat quis autem ducimus pariatur similique hic odio beatae aut dolore iure quam, asperiores omnis?"></Card.Title>
        </Card.Content>
      </Card>
    </View>
  );
};

export default HomeScreen;
