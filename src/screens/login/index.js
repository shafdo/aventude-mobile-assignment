import { Button, Text, View, TextInput } from 'react-native';
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

      <Button style={{ padding: 50 }} title="Login" />
      <Text style={{ ...styles.paragraph, textAlign: 'center', marginTop: 40 }}>
        Don't have an account yet. Click <Link to={{ screen: 'Register' }}>here</Link> to register.
      </Text>
    </View>
  );
};

export default LoginScreen;
