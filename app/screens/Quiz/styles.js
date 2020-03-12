/* eslint-disable react-native/no-color-literals */
import { StyleSheet } from 'react-native';
import { COLOR_WHITE, COLOR_BASE_PRIMARY_MAIN } from '../../styles';
import { scale } from '../../utils/scaling';
import METRICS from '../../constants/metrics';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR_WHITE,
    alignContent: 'center'
  },
  header: {
    alignItems: 'center',
    backgroundColor: COLOR_BASE_PRIMARY_MAIN
  },
  title: {
    fontWeight: 'bold',
    color: COLOR_WHITE
  },
  number: {
    fontFamily: 'Nunito',
    fontWeight: 'bold',
    fontSize: scale(20),
    alignSelf: 'center',
    marginTop: METRICS.doubleBaseMargin
  },
  question: {
    fontFamily: 'Nunito',
    fontWeight: 'bold',
    fontSize: scale(15),
    width: scale(310),
    alignSelf: 'baseline',
    marginTop: METRICS.doubleBaseMargin,
    marginLeft: scale(30)
  },
  option: {
    width: scale(300),
    height: scale(60),
    borderColor: COLOR_BASE_PRIMARY_MAIN,
    borderWidth: scale(1),
    borderRadius: scale(5),
    marginLeft: scale(25),
    marginTop: METRICS.doubleBaseMargin
  },
  optionTxt: {
    fontFamily: 'Nunito',
    fontWeight: 'bold',
    color: COLOR_BASE_PRIMARY_MAIN,
    fontSize: scale(18),
    marginLeft: METRICS.doubleBaseMargin,
    marginTop: scale(16)
  },
  optionSelect: {
    width: scale(300),
    height: scale(60),
    borderColor: COLOR_BASE_PRIMARY_MAIN,
    backgroundColor: COLOR_BASE_PRIMARY_MAIN,
    borderWidth: scale(1),
    borderRadius: scale(5),
    marginLeft: scale(25),
    marginTop: METRICS.doubleBaseMargin
  },
  optionTxtSelect: {
    fontFamily: 'Nunito',
    fontWeight: 'bold',
    color: COLOR_WHITE,
    fontSize: scale(18),
    marginLeft: METRICS.doubleBaseMargin,
    marginTop: scale(16)
  },
  button: {
    marginTop: scale(30),
    marginHorizontal: 12,
    marginLeft: scale(30),
    backgroundColor: COLOR_BASE_PRIMARY_MAIN,
    width: scale(300),
    height: scale(40),
    borderRadius: 5
  }
});

export default styles;
