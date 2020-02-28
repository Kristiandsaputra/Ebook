import React from 'react';
import { View, ScrollView, Image, Text } from 'react-native';
import MainScreen from '../../components/layouts/MainScreen';
import Header from '../../components/elements/Header';
import styles from './styles';
import IMAGES from '../../configs/images';
import I18n from '../../i18n';

export default class Component extends React.Component {
  _onPress = () => {};

  render() {
    return (
      <MainScreen style={styles.container}>
        <ScrollView>
          <Header title="Materi" back />
          <View style={styles.imgContainer}>
            <Image source={IMAGES.rumah} style={styles.imgContainer} />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.title}>{I18n.t('title2')}</Text>
            <Text style={styles.content}>{I18n.t('content2')}</Text>
          </View>
        </ScrollView>
      </MainScreen>
    );
  }
}
