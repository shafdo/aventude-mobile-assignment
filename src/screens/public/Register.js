import React from 'react';
import { Text, View, TextInput } from 'react-native';
import { Link } from '@react-navigation/native';
import { Button } from 'react-native-paper';
import { styles } from '../../styles/_index';

const registerScreen = () => {
  return (
    <View style={{ ...styles.container }}>
      <Text style={{ ...styles.heading2, textAlign: 'center' }}>Welcome to register</Text>

      <View style={{ marginBottom: 20 }}>
        <TextInput editable maxLength={40} placeholder="Enter your username" style={styles.textInput} />
        <TextInput editable maxLength={40} placeholder="Enter password" style={styles.textInput} />
        <TextInput editable maxLength={40} placeholder="Confirm your password" style={styles.textInput} />
      </View>

      <Button mode="contained">Register</Button>
      <Text style={{ ...styles.paragraph, textAlign: 'center', marginTop: 40 }}>
        Already have an account?{' '}
        <Link to={{ screen: 'Login' }} style={{ ...styles.link }}>
          Login here
        </Link>
        .
      </Text>
    </View>
  );
};

export default registerScreen;
