/* eslint-disable no-console */
/* eslint-disable no-shadow */
import React from 'react';
import axios from 'axios';
import { View, TextInput, Text } from 'react-native';
import PropTypes from 'prop-types';
import MainScreen from '../../components/layouts/MainScreen';
import styles from './styles';
import I18n from '../../i18n';
import Button from '../../components/elements/Button';

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

  _forgetPass = () => {
    const { navigation } = this.props;
    navigation.navigate('ForgetPassword');
  };

  _signUp = async () => {
    const { name, email, password } = this.state;
    const accountData = { name, email, password };
    try {
      const res = await axios.post('http://ec2-3-89-74-85.compute-1.amazonaws.com/api/register', accountData);
      console.log(res.data);
      this.props.navigation.navigate('Home');
    } catch (error) {
      console.error('MASIH ERROR');
      console.log(error);
    }
  };

  _signIn = () => {
    const { navigation } = this.props;
    navigation.navigate('SignIn');
  };

  render() {
    const { isLoading, email, password, name, isHidden } = this.state;
    return (
      <MainScreen isLoading={isLoading} style={styles.mainContainer}>
        <View style={styles.appTitle}>
          <Text style={styles.appTitle}>{I18n.t('signUp')}</Text>
        </View>
        <View style={styles.margin} />
        <View style={styles.inputText}>
          <TextInput
            textContentType="name"
            placeholder={I18n.t('name')}
            editable
            autoCapitalize="none"
            value={name}
            onChangeText={name => this.setState({ name })}
          />
        </View>
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
          title={I18n.t('signUp')}
          onPress={this._signUp}
        />
        <View style={styles.margin} />
        <Button
          customText={styles.outlinedText}
          title={I18n.t('login')}
          customContainer={styles.outlined}
          onPress={this._signIn}
        />
      </MainScreen>
    );
  }
}

Component.propTypes = {
  navigation: PropTypes.object.isRequired
};
