import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, Linking, ScrollView } from 'react-native';
import Style from './styles';
import Card from '../../components/Card';
import Header from '../../components/elements/Header';
import IMAGES from '../../configs/images';

export default class Lala extends Component {
  render() {
    return (
      <View style={Style.mainScreen}>
        <Header ContainerStyle={Style.lala} title="Upload Photo" setting back />
        <ScrollView>
          <View style={Style.container}>
            <View style={Style.card}>
              <Text style={Style.title}>Kiamatku</Text>
              <Text style={Style.desc}>Kiamatku adalah aplikasi yang berisi tentang hari akhir</Text>
            </View>
            <View>
              <TouchableOpacity onPress={() => Linking.openURL('https://www.instagram.com/kristiannds/')}>
                <Card
                  icon1={<Image source={IMAGES.rz} resizeMode="contain" style={Style.nana} />}
                  title="Kristian Damas"
                  divisi="Front End Developer"
                  instagram="@kristiannds_"
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => Linking.openURL('https://www.instagram.com/prmana.u/')}>
                <Card
                  icon1={<Image source={IMAGES.rz} resizeMode="contain" style={Style.nana} />}
                  title="Lulu Irman"
                  divisi="Backend Developer"
                  instagram="@prmana.u"
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => Linking.openURL('https://www.instagram.com/@_joyanu')}>
                <Card
                  icon1={<Image source={IMAGES.rz} resizeMode="contain" style={Style.nana} />}
                  title="Joya Nafa Ulya"
                  divisi="UI/UX Designer"
                  instagram="@_joyanu"
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => Linking.openURL('https://www.instagram.com/mdffkr/')}>
                <Card
                  icon1={<Image source={IMAGES.rz} resizeMode="contain" style={Style.nana} />}
                  title="Muhamad Dafa"
                  divisi="UI/UX Designer"
                  instagram="@mdffkr"
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => Linking.openURL('https://www.instagram.com/makanefollow/')}>
                <Card
                  icon1={<Image source={IMAGES.rz} resizeMode="contain" style={Style.nana} />}
                  title="Muhamad Ilham"
                  divisi="UI/UX Designer"
                  instagram="@makanefollow "
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => Linking.openURL('https://www.instagram.com/muhilman2002/')}>
                <Card
                  icon1={<Image source={IMAGES.rz} resizeMode="contain" style={Style.nana} />}
                  title="Muhamad Hilman"
                  divisi="UI/UX Designer"
                  instagram="@muhilman2002"
                />
              </TouchableOpacity>
            </View>
            <Text style={Style.cp}>© 2020. Kiamatku - All Right Reserved</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}
