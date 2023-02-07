import { StyleSheet } from 'react-native';

const cardStyles = {
  card: {
    marginBottom: 40
  },
  cardContent: {
    paddingTop: 15,
    paddingBottom: 20
  },
  cardTitle: {
    marginBottom: 10
  },
  cardUnitWrapper: {
    marginTop: 20,
    marginBottom: 30,
    paddingRight: 20,
    paddingLeft: 20,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  cardPrice: {
    fontSize: 20
  },
  cardStock: {
    fontSize: 20
  },
  cardGotoProduct: {
    fontSize: 16
  }
};

const layoutStyles = {
  flexCenter: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  flexBetween: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  flexEnd: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  alignCenter: {
    alignItems: 'center'
  }
};

// This will be the main styles conponent that is exported
export const styles = StyleSheet.create({
  container: {
    marginRight: 15,
    marginLeft: 15,
    flex: 1,
    marginBottom: 40
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
    fontSize: 16,
    lineHeight: 26
  },
  heading1: {
    fontSize: 36,
    marginVertical: 40
  },
  heading2: {
    fontSize: 30,
    marginVertical: 40
  },
  heading3: {
    fontSize: 24,
    marginVertical: 40
  },
  heading4: {
    fontSize: 18,
    marginVertical: 40
  },
  link: {
    fontWeight: 'bold'
  },
  divider: {
    marginTop: 15,
    marginBottom: 15
  },
  loader: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    height: '100%',
    zIndex: 100,
    backgroundColor: '#ffffffe7'
  },
  ...cardStyles,
  ...layoutStyles
});
