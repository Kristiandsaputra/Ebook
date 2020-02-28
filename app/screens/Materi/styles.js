import { StyleSheet } from 'react-native';
import { COLOR_WHITE, COLOR_BLACK } from '../../styles';
import { scale } from '../../utils/scaling';
import METRICS from '../../constants/metrics';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: COLOR_WHITE
  },
  imgContainer: {
    width: scale(325),
    height: scale(200),
    borderRadius: scale(25)
  },
  column: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: METRICS.doubleBaseMargin,
    marginBottom: METRICS.doubleBaseMargin
  },
  VidContainer: {
    flex: 1,
    marginTop: METRICS.doubleBaseMargin
  },
  textContainer: {
    alignItems: 'center',
    width: scale(375),
    height: scale(300)
  },
  textContainerLong: {
    alignItems: 'center',
    width: scale(375),
    height: scale(600)
  },
  title: {
    fontSize: scale(20),
    fontWeight: 'bold',
    marginTop: METRICS.doubleBaseMargin,
    marginBottom: METRICS.doubleBaseMargin,
    color: COLOR_BLACK
  },
  content: {
    fontSize: scale(14),
    color: COLOR_BLACK
  },
  margin1: {
    marginBottom: METRICS.doubleBaseMargin
  },
  margin2: {
    marginBottom: METRICS.baseMargin
  }
});

export default styles;
