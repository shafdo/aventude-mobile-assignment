import { View, Text } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import { styles } from '../styles/_index';

export const DefaultLoader = (props) => {
  const loaderVisibility = props.animating ? { display: 'flex' } : { display: 'none' };
  return (
    <View style={{ ...styles.loader, ...loaderVisibility }}>
      <ActivityIndicator color="#5E17EB" size="large" animating={props.animating} textContent={'Loading...'} />
      <Text style={{ ...styles.heading4, marginVertical: 0, marginTop: 25 }}>Working on it. Please wait ...</Text>
    </View>
  );
};
