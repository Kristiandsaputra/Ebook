import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import MainScreen from '../../components/layouts/MainScreen';
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

  _materi = () => {
    const { navigation } = this.props;
    navigation.navigate('Materi');
  };
  _materi2 = () => {
    const { navigation } = this.props;
    navigation.navigate('Materi2');
  };
  _list = () => {
    const { navigation } = this.props;
    navigation.navigate('ListQuiz');
  };
  render() {
    return (
      <MainScreen style={styles.container} isLoading={this.state.isLoading}>
        <ScrollView>
          <View style={styles.row}>
            <TouchableOpacity style={styles.btnContainer}>
              <Text style={styles.text4}>Teori</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnContainer2} onPress={this._list}>
              <Text style={styles.text4}>Quiz</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.column}>
            <TouchableOpacity style={styles.container3} onPress={this._materi}>
              <Image source={IMAGES.peng} style={styles.imgContainer} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.container3} onPress={this._materi2}>
              <Image source={IMAGES.macam} style={styles.imgContainer} />
              <Text style={styles.text3}>{I18n.t('title2')}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.container3}>
              <Image source={IMAGES.gunung} style={styles.imgContainer} />
              <Text style={styles.text3}>{I18n.t('materi')}</Text>
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
