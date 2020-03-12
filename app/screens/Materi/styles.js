import { StyleSheet } from 'react-native';
import { COLOR_WHITE, COLOR_BLACK } from '../../styles';
import { scale } from '../../utils/scaling';
import METRICS from '../../constants/metrics';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLOR_WHITE
  },
  imgContainer: {
    width: scale(375),
    height: scale(245)
  },
  textContainer: {
    backgroundColor: COLOR_WHITE,
    width: scale(375),
    height: scale(700),
    borderBottomRightRadius: scale(15),
    borderTopLeftRadius: scale(15)
  },
  textContainerLong: {
    width: scale(375),
    height: scale(600)
  },
  title: {
    fontSize: scale(20),
    fontWeight: 'bold',
    marginTop: METRICS.doubleBaseMargin,
    marginBottom: METRICS.doubleBaseMargin,
    marginLeft: METRICS.baseMargin,
    color: COLOR_BLACK
  },
  content: {
    fontSize: scale(14),
    marginLeft: METRICS.baseMargin,
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
