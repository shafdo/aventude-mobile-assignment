import { Text, View } from 'react-native';
import { styles } from '../../styles/_index';

const ProductScreen = () => {
  return (
    <View style={{ ...styles.container }}>
      <Text style={{ ...styles.heading2, textAlign: 'center' }}>Product</Text>
    </View>
  );
};

export default ProductScreen;
