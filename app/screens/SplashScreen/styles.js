import { StyleSheet } from 'react-native';
import { COLOR_WHITE,COLOR_BLACK } from '../../styles';
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
  logo: {  width: scale(95), height: scale(95), marginBottom: METRICS.baseMargin },
  appTitle: { fontSize: 18, color: COLOR_BLACK },
  appVersion: { fontSize: 14 }
});

export default styles;
