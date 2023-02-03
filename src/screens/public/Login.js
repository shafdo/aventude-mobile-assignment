import { Text, View, TextInput } from 'react-native';
import { Button } from 'react-native-paper';
import { Link } from '@react-navigation/native';
import { styles } from '../../styles/_index';

const LoginScreen = () => {
  return (
    <View style={{ ...styles.container }}>
      <Text style={{ ...styles.heading2, textAlign: 'center' }}>Login</Text>

      <View style={{ marginBottom: 20 }}>
        <TextInput editable maxLength={40} placeholder="Enter your username" style={styles.textInput} />
        <TextInput editable maxLength={40} placeholder="Enter password" style={styles.textInput} />
      </View>

      <Button mode="contained">Login</Button>
      <Text style={{ ...styles.paragraph, textAlign: 'center', marginTop: 40 }}>
        Don't have an account yet?{' '}
        <Link to={{ screen: 'Register' }} style={{ ...styles.link }}>
          Register here
        </Link>
        .
      </Text>
    </View>
  );
};

export default LoginScreen;
