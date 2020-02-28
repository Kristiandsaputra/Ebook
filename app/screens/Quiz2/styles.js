/* eslint-disable react-native/no-color-literals */
import { StyleSheet } from 'react-native';
import { COLOR_WHITE, COLOR_BLACK, COLOR_BASE_PRIMARY_MAIN } from '../../styles';

const styles = StyleSheet.create({
  gridCol: {
    flexDirection: 'row',
    height: 150,
    padding: 20,
    margin: 20,
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: COLOR_BASE_PRIMARY_MAIN,
    width: '90%'
  },
  gridText: {
    color: COLOR_BASE_PRIMARY_MAIN
  },

  gridTextvalue: {
    // textAlign: 'right',
    color: COLOR_BLACK,
    width: '95%'
  },

  gridColAnswer: {
    // flexDirection: 'row',
    height: 220,
    padding: 20,
    margin: 20
  },
  buttonStyle: {
    justifyContent: 'center',
    borderBottomWidth: 0,
    marginBottom: 10,
    marginTop: 10,
    width: '40%',
    marginLeft: '10%',
    backgroundColor: COLOR_BASE_PRIMARY_MAIN
  },
  buttonStyleExit: {
    justifyContent: 'center',
    borderBottomWidth: 0,
    marginBottom: 10,
    marginTop: 10,
    width: '40%',

    backgroundColor: COLOR_BASE_PRIMARY_MAIN,
    margin: 20
  },

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLOR_WHITE
  },
  text: {
    color: COLOR_BLACK,
    fontSize: 24,
    paddingTop: '40%'
  }
});

export default styles;
