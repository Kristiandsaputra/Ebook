/* eslint-disable no-console */
/* eslint-disable no-shadow */
import React from 'react';
import { View, TextInput, Text } from 'react-native';
import PropTypes from 'prop-types';
import axios from 'axios';
import MainScreen from '../../components/layouts/MainScreen';
import styles from './styles';
import I18n from '../../i18n';
import Button from '../../components/elements/Button';
// import { ENDPOINT } from '../../configs';
import { STORAGE_KEY } from '../../constants';
import storage from '../../utils/storage';

export default class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      isHidden: true,
      isLoading: false
    };
    this._showPass = this._showPass.bind(this);
  }

  _showPass = () => {
    this.setState({ isHidden: !this.state.isHidden });
  };

  _signUp = () => {
    const { navigation } = this.props;
    navigation.navigate('SignUp');
  };
  _signIn = async () => {
    const { name, email, password } = this.state;
    const accountData = { name, email, password };
    try {
      const res = await axios.post('http://ec2-3-89-74-85.compute-1.amazonaws.com/api/login', accountData);
      console.log(res.data);
      this.props.navigation.navigate('Home');
      await storage.set(STORAGE_KEY.TOKEN_LOGIN, res.data);
    } catch (error) {
      console.error('MASIH ERROR');
      console.log(error);
    }
  };
  // _signIn = async () => {
  //   const { email, password } = this.state;
  //   const params = { email, password };
  //   try {
  //     const result = await ENDPOINT.login(params);
  //     console.log(result);
  //     if (result.code === 200) {
  //       this.props.navigation.navigate('Home');
  //       await storage.set(STORAGE_KEY.TOKEN_LOGIN, result.data);
  //       // this.props.navigation.navigate('Home');
  //     } else if (result.code === 400) {
  //       ToastAndroid.show('Failed to login', ToastAndroid.SHORT);
  //     }
  //   } catch (error) {
  //     ToastAndroid.show('error.networkError', ToastAndroid.SHORT);
  //   } finally {
  //     this.setState({ isLoading: false });
  //   }
  // };

  render() {
    const { isLoading, email, password, isHidden } = this.state;
    return (
      <MainScreen isLoading={isLoading} style={styles.mainContainer}>
        <View style={styles.appTitle}>
          <Text style={styles.appTitle}>{I18n.t('login')}</Text>
        </View>
        <View style={styles.margin} />
        <View style={styles.row}>
          <View style={styles.inputText}>
            <TextInput
              textContentType="emailAddress"
              placeholder={I18n.t('email')}
              editable
              autoCapitalize="none"
              value={email}
              onChangeText={email => this.setState({ email })}
            />
          </View>
        </View>
        <View style={styles.inputText}>
          <TextInput
            secureTextEntry={isHidden}
            placeholder={I18n.t('password')}
            editable
            autoCapitalize="none"
            value={password}
            onChangeText={password => this.setState({ password })}
          />
        </View>
        <View style={styles.margin2} />
        <Button
          type="raised-ripple"
          customText={styles.login}
          customContainer={styles.btn2}
          title={I18n.t('login')}
          onPress={this._signIn}
        />
        <View style={styles.margin} />
        <Button
          customText={styles.outlinedText}
          title={I18n.t('signUp')}
          customContainer={styles.outlined}
          onPress={this._signUp}
        />
      </MainScreen>
    );
  }
}

Component.propTypes = {
  navigation: PropTypes.object.isRequired
};
