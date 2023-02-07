import { Text, ScrollView } from 'react-native';
import { styles } from '../../styles/_index';

const ProfileScreen = ({ route }) => {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
      <Text style={{ ...styles.heading2, textAlign: 'center', marginBottom: 0 }}>Profile</Text>
    </ScrollView>
  );
};

export default ProfileScreen;
