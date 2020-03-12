import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import MainScreen from '../../components/layouts/MainScreen';
import Header from '../../components/elements/Header';
// import question from '../../data/question';
import styles from './styles';
import storage from '../../utils/storage';
import { STORAGE_KEY } from '../../constants';

export default class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false
    };
  }
  // componentWillMount() {
  //   const { actions } = this.props;
  //   this._loadData();
  // }
  _teori = () => {
    const { navigation } = this.props;
    navigation.navigate('Home');
  };
  _toQuiz = () => {
    const { navigation } = this.props;
    navigation.navigate('ListQuiz');
  };
  _tentang = () => {
    const { navigation } = this.props;
    navigation.navigate('Tentang');
  };
  _onPress = async () => {
    await storage.remove(STORAGE_KEY.TOKEN_LOGIN);
    this.props.navigation.navigate('SessionScreen');
  };
  render() {
    return (
      <MainScreen style={styles.container} isLoading={this.state.isLoading}>
        <ScrollView>
          <Header title="Setting" />
          <View style={styles.row}>
            <TouchableOpacity style={styles.btnContainer} onPress={this._teori}>
              <Text style={styles.text4}>Teori</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnContainer2} onPress={this._toQuiz}>
              <Text style={styles.text4}>Quiz</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnContainer3} onPress={this._list}>
              <Text style={styles.text4}>Setting</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.column}>
            <TouchableOpacity style={styles.container3}>
              <Text style={styles.text2}>Help</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.container3} onPress={this._tentang}>
              <Text style={styles.text2}>About Us</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.container3} onPress={this._onPress}>
              <Text style={styles.text2}>Logout</Text>
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
