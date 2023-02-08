import { useEffect, useState, React } from 'react';
import { Text, View, TextInput } from 'react-native';
import { Button, Dialog } from 'react-native-paper';
import { Link } from '@react-navigation/native';
import { styles } from '../../styles/_index';
import { DefaultLoader } from '../../components/Loader';
import { GetUserInfoApi, LoginApi } from '../../api/user.api';
import { login } from '../../redux/store';
import { useDispatch } from 'react-redux';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [spinnerAnimate, setSpinnerAnimate] = useState(false);
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertTitle, setAlertTitle] = useState('');
  const [alertMsg, setAlertMsg] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    if (isLoggedIn) return navigation.navigate('Home', { screen: 'Catalog' });
  }, [isLoggedIn]);

  const showAlert = (title, msg) => {
    setAlertVisible(true);
    setAlertTitle(title);
    setAlertMsg(msg);
    return;
  };

  const getUserId = async () => {
    const res = await GetUserInfoApi()
      .then((response) => {
        return response;
      })
      .catch((error) => {
        return error.response;
      });

    return res.data.userId;
  };

  const onSubmit = async () => {
    // Validations
    if (email.length <= 0 || password.length <= 0) return showAlert('Error', 'One or more inputs not filled.');

    // Start loader
    setSpinnerAnimate(true);

    // Send request
    const res = await LoginApi(email, password)
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

    showAlert('Success', 'Logged inn successfully.');
    const uid = await getUserId();
    dispatch(login({ uid: uid, email: email, isLoggedIn: true }));
    setIsLoggedIn(true);
    return;
  };

  return (
    <View style={{ ...styles.container }}>
      <DefaultLoader animating={spinnerAnimate}></DefaultLoader>
      <Text style={{ ...styles.heading2, textAlign: 'center' }}>Login</Text>

      <View style={{ marginBottom: 20 }}>
        <TextInput editable maxLength={40} placeholder="Enter your email" style={styles.textInput} onChangeText={(text) => setEmail(text)} />
        <TextInput editable maxLength={40} secureTextEntry placeholder="Enter password" style={styles.textInput} onChangeText={(text) => setPassword(text)} />
      </View>

      <Button mode="contained" onPress={() => onSubmit()}>
        Login
      </Button>
      <Text style={{ ...styles.paragraph, textAlign: 'center', marginTop: 40 }}>
        Don't have an account yet?{' '}
        <Link to={{ screen: 'Register' }} style={{ ...styles.link }}>
          Register here
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
          <Button onPress={() => setAlertVisible(false)}>Ok</Button>
        </Dialog.Actions>
      </Dialog>
    </View>
  );
};

export default LoginScreen;
