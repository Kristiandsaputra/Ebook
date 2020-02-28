import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import MainScreen from '../../components/layouts/MainScreen';
import Header from '../../components/elements/Header';
// import question from '../../data/question';
import { IMAGES, ENDPOINT } from '../../configs';
import styles from './styles';
import I18n from '../../i18n';

export default class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      nama: ''
    };
  }
  // componentWillMount() {
  //   const { actions } = this.props;
  //   this._loadData();
  // }

  _loadData = async () => {
    try {
      await this.setState({ isLoading: true });
      // eslint-disable-next-line no-unused-vars
      const result = await ENDPOINT.me();
      console.log(result.data);
      this.setState({ nama: result.data.name });
      console.log(this.state.nama);
    } catch (error) {
      error.createError(I18n.t('error.timeOutConnection'));
    } finally {
      this.setState({ isLoading: false });
    }
  };
  _teori = () => {
    const { navigation } = this.props;
    navigation.navigate('Home');
  };
  _toQuiz = () => {
    const { navigation } = this.props;
    navigation.navigate('Quiz');
  };
  _toQuiz2 = () => {
    const { navigation } = this.props;
    navigation.navigate('Quiz2');
  };

  render() {
    return (
      <MainScreen style={styles.container} isLoading={this.state.isLoading}>
        <ScrollView>
          <Header burger />
          <View style={styles.container2}>
            <View>
              <Text style={styles.text}>{I18n.t('hello')}</Text>
              <Text style={styles.text2}>{I18n.t('nama')}</Text>
            </View>
          </View>
          <View style={styles.row}>
            <TouchableOpacity style={styles.btnContainer} onPress={this._teori}>
              <Text style={styles.text4}>Teori</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnContainer2}>
              <Text style={styles.text4}>Quiz</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.column}>
            <TouchableOpacity style={styles.container3} onPress={this._toQuiz}>
              <Image source={IMAGES.lat1} style={styles.imgContainer} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.container3} onPress={this._toQuiz2}>
              <Image source={IMAGES.lat2} style={styles.imgContainer} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.container3}>
              <Image source={IMAGES.lat2} style={styles.imgContainer} />
            </TouchableOpacity>
          </View>
        </ScrollView>
      </MainScreen>
    );
  }
}

Component.defaultProps = {
  listUsers: []
};
