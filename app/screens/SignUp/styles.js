/* eslint-disable react-native/no-color-literals */
import { StyleSheet } from 'react-native';
import {
  COLOR_WHITE,
  COLOR_BASE_PRIMARY_MAIN,
  FONT_HEADLINE6_PRIMARY,
  FONT_SUBTITLE2_PRIMARY,
  FONT_BODY2_PRIMARY,
  FONT_CAPTION_PRIMARY,
  FONT_BUTTON_PRIMARY,
  COLOR_BLACK
} from '../../styles';
import { scale } from '../../utils/scaling';
import METRICS from '../../constants/metrics';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F4F4F4'
  },
  logoContainer: { width: scale(100), height: scale(100) },
  logo: { flex: 1, width: scale(100), height: scale(100), marginBottom: METRICS.baseMargin },
  appTitle: {
    ...FONT_HEADLINE6_PRIMARY,
    color: '#FF0000',
    fontSize: scale(40),
    marginTop: METRICS.baseMargin
  },
  appDesc: { ...FONT_SUBTITLE2_PRIMARY, color: COLOR_BASE_PRIMARY_MAIN, marginBottom: METRICS.doubleSection },
  forgetPass: {
    width: scale(90),
    marginLeft: METRICS.doubleBaseMargin,
    marginBottom: METRICS.doubleSection,
    color: COLOR_BLACK,
    ...FONT_CAPTION_PRIMARY
  },
  inputContainer: {
    width: scale(300),
    height: scale(40)
  },
  inputText: {
    margin: scale(10),
    width: scale(300),
    height: scale(40)
  },
  row: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center'
  },
  container: { flexDirection: 'column', alignContent: 'flex-start' },
  input: { marginLeft: scale(30), ...FONT_BODY2_PRIMARY },
  inputLogo: { width: scale(20), height: scale(20), position: 'absolute', margin: scale(8) },
  showPassLogo: {
    width: scale(20),
    height: scale(20),
    position: 'absolute',
    marginLeft: METRICS.marginHide,
    top: METRICS.topHide
  },
  margin: { marginBottom: METRICS.baseMargin },
  margin2: { marginBottom: scale(50) },
  outlined: {
    width: scale(300),
    height: scale(40),
    backgroundColor: COLOR_WHITE
  },
  outlinedText: { color: COLOR_BLACK, ...FONT_BUTTON_PRIMARY },
  login: { color: COLOR_WHITE, ...FONT_BUTTON_PRIMARY },
  btn: {
    width: scale(130),
    height: scale(30),
    backgroundColor: COLOR_WHITE
  },
  btn2: {
    width: scale(300),
    height: scale(40),
    backgroundColor: '#FF0000'
  }
});

export default styles;
