import React from 'react';
import { Button, Text, View, TextInput } from 'react-native';
import { Link } from '@react-navigation/native';

const registerScreen = () => {
  const styles = {
    textInput: {
      justifyContent: 'center',
      borderWidth: 1,
      padding: 15,
      height: 50,
      borderColor: '#111111',
      borderRadius: 20,
      marginBottom: 20
    }
  };

  return (
    <View>
      <Text style={{ fontSize: 25, textAlign: 'center', marginTop: 40, marginBottom: 40 }}>Welcome to register page</Text>

      <View style={{ marginBottom: 20 }}>
        <TextInput editable maxLength={40} placeholder="Enter your username" style={styles.textInput} />
        <TextInput editable maxLength={40} placeholder="Enter password" style={styles.textInput} />
        <TextInput editable maxLength={40} placeholder="Confirm your password" style={styles.textInput} />
      </View>

      <Button style={{ padding: 50 }} title="Register" />
      <Text style={{ fontSize: 18, textAlign: 'center', marginTop: 40 }}>
        Already have an account. <Link to={{ screen: 'Login' }}>Login</Link>.
      </Text>
    </View>
  );
};

export default registerScreen;
