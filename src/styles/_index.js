import { StyleSheet } from 'react-native';

const cardStyles = {
  cardContent: {
    paddingTop: 15,
    paddingBottom: 20
  },
  cardTitle: {
    marginBottom: 10
  }
};

// This will be the main styles conponent that is exported
export const styles = StyleSheet.create({
  container: {
    marginRight: 15,
    marginLeft: 15
  },
  textInput: {
    justifyContent: 'center',
    borderWidth: 1,
    padding: 15,
    height: 50,
    borderColor: '#111111',
    borderRadius: 20,
    marginBottom: 20
  },
  paragraph: {
    fontSize: 16
  },
  heading1: {
    fontSize: 36,
    marginTop: 40,
    marginBottom: 40
  },
  heading2: {
    fontSize: 30,
    marginTop: 40,
    marginBottom: 40
  },
  heading3: {
    fontSize: 24,
    marginTop: 40,
    marginBottom: 40
  },
  heading4: {
    fontSize: 18,
    marginTop: 40,
    marginBottom: 40
  },
  ...cardStyles
});
