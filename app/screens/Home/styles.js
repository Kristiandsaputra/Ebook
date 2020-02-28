import { StyleSheet } from 'react-native';
import {
  COLOR_WHITE,
  COLOR_BASE_PRIMARY_MAIN,
  FONT_HEADLINE6_PRIMARY,
  COLOR_GREY,
  COLOR_BASE_PRIMARY_LIGHT
} from '../../styles';
import { scale } from '../../utils/scaling';
import METRICS from '../../constants/metrics';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR_WHITE
  },
  container2: {
    flexDirection: 'row',
    height: scale(100),
    backgroundColor: COLOR_BASE_PRIMARY_MAIN,
    borderBottomLeftRadius: scale(25),
    borderBottomRightRadius: scale(25)
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: METRICS.doubleBaseMargin,
    marginBottom: METRICS.doubleBaseMargin
  },
  column: {
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'center',
    marginLeft: scale(25)
  },
  container3: {
    marginTop: METRICS.doubleBaseMargin,
    flexDirection: 'column',
    alignContent: 'center',
    height: scale(200),
    width: scale(300),
    backgroundColor: COLOR_GREY,
    borderRadius: scale(25)
  },
  btnContainer: {
    width: scale(120),
    height: scale(30),
    borderBottomLeftRadius: scale(10),
    borderTopLeftRadius: scale(10),
    backgroundColor: COLOR_BASE_PRIMARY_MAIN,
    alignItems: 'center'
  },
  btnContainer2: {
    width: scale(120),
    height: scale(30),
    borderBottomRightRadius: scale(10),
    borderTopRightRadius: scale(10),
    backgroundColor: COLOR_BASE_PRIMARY_LIGHT,
    alignItems: 'center'
  },
  imgContainer: {
    width: scale(300),
    height: scale(200),
    borderRadius: scale(25),
    alignContent: 'center'
  },
  text: {
    marginLeft: METRICS.doubleBaseMargin,
    ...FONT_HEADLINE6_PRIMARY,
    color: COLOR_WHITE,
    fontSize: scale(20),
    marginTop: METRICS.baseMargin
  },
  text2: {
    marginLeft: METRICS.doubleBaseMargin,
    ...FONT_HEADLINE6_PRIMARY,
    color: COLOR_WHITE,
    fontSize: scale(30),
    marginTop: scale(5),
    fontWeight: 'bold'
  },
  text3: {
    marginLeft: METRICS.doubleBaseMargin,
    ...FONT_HEADLINE6_PRIMARY,
    color: COLOR_WHITE,
    fontSize: scale(20)
  },
  text4: {
    ...FONT_HEADLINE6_PRIMARY,
    color: COLOR_WHITE,
    fontSize: scale(20)
  }
});

export default styles;
