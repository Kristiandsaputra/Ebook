import { StyleSheet } from 'react-native';
import { COLOR_WHITE, COLOR_BASE_SECONDARY_MAIN } from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLOR_WHITE
  },
  container2: {
    backgroundColor: COLOR_BASE_SECONDARY_MAIN,
    flex: 1,
    paddingHorizontal: 20
  },
  text: {
    color: COLOR_WHITE,
    fontSize: 25,
    textAlign: 'center',
    letterSpacing: -0.02,
    fontWeight: '600'
  },
  safearea: {
    flex: 1,
    marginTop: 100,
    justifyContent: 'space-between'
  }
});

export default styles;
