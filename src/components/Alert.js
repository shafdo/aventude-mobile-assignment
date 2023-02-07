import { Alert } from 'react-native';

export const ErrorAlert = (title, desc) => {
  return Alert.alert(title, desc, [{ text: 'OK' }]);
};
