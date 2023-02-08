import React, { useState } from 'react';
import { Text, View, TextInput } from 'react-native';
import { Link } from '@react-navigation/native';
import { Button, Dialog } from 'react-native-paper';
import { styles } from '../../styles/_index';
import { DefaultLoader } from '../../components/Loader';
import { RegisterApi } from '../../api/user.api';

const registerScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [spinnerAnimate, setSpinnerAnimate] = useState(false);
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertTitle, setAlertTitle] = useState('');
  const [alertMsg, setAlertMsg] = useState('');

  const showAlert = (title, msg) => {
    setAlertVisible(true);
    setAlertTitle(title);
    setAlertMsg(msg);
    return;
  };

  const redirectToLogin = () => {
    return navigation.navigate('Login');
  };

  const onSubmit = async () => {
    // Validations
    if (email.length <= 0 || password.length <= 0 || confirmPassword.length <= 0) return showAlert('Error', 'One or more inputs not filled.');
    if (password != confirmPassword) return showAlert('Error', 'Password not match with confirm password.');

    // Start loader
    setSpinnerAnimate(true);

    // Send request
    const res = await RegisterApi(email, password)
      .then((response) => {
        return response;
      })
      .catch((error) => {
        return error.response;
      });

    // Stop loader
    setSpinnerAnimate(false);

    // Show alert with response
    if (res.status != 200) return showAlert('Failed', res.data);

    showAlert('Success', 'User created successfully.');
  };

  return (
    <View style={{ ...styles.container }}>
      <DefaultLoader animating={spinnerAnimate}></DefaultLoader>

      <Text style={{ ...styles.heading2, textAlign: 'center' }}>Welcome to register</Text>

      <View style={{ marginBottom: 20 }}>
        <TextInput editable maxLength={40} placeholder="Enter your email" style={styles.textInput} onChangeText={(text) => setEmail(text)} />
        <TextInput editable maxLength={40} secureTextEntry placeholder="Enter password" style={styles.textInput} onChangeText={(text) => setPassword(text)} />
        <TextInput editable maxLength={40} secureTextEntry placeholder="Confirm your password" style={styles.textInput} onChangeText={(text) => setConfirmPassword(text)} />
      </View>

      <Button mode="contained" onPress={() => onSubmit()}>
        Register
      </Button>

      <Text style={{ ...styles.paragraph, textAlign: 'center', marginTop: 40 }}>
        Already have an account?{' '}
        <Link to={{ screen: 'Login' }} style={{ ...styles.link }}>
          Login here
        </Link>
        .
      </Text>

      {/* Alerts */}
      <Dialog visible={alertVisible} onDismiss={() => setAlertVisible(false)}>
        <Dialog.Title>{alertTitle}</Dialog.Title>
        <Dialog.Content>
          <Text variant="bodyMedium">{alertMsg}</Text>
        </Dialog.Content>
        <Dialog.Actions>
          <Button onPress={() => redirectToLogin()}>Ok</Button>
        </Dialog.Actions>
      </Dialog>
    </View>
  );
};

export default registerScreen;
