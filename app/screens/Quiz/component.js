/* eslint-disable react/prop-types */
/* eslint-disable no-console */
/* eslint-disable array-callback-return */
/* eslint-disable no-param-reassign */
/* eslint-disable react-native/no-raw-text */
/* eslint-disable react/sort-comp */
/* eslint-disable react/jsx-no-bind */
import React, { Component } from 'react';
import { View, BackHandler, TouchableOpacity, Button } from 'react-native';
import { Text, Container, Header, Left, Body, Right, Title, Content, CheckBox } from 'native-base';
// import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import SvgBack from '../../../assets/svgs/Back';
// eslint-disable-next-line import/named
import { COLOR_BASE_PRIMARY_MAIN } from '../../styles';

export default class QuestionAnswer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questionAnswer: [
        {
          question:
            'Setelah dibangkitkan dari dalam kubur, manusia berbondong-bondong menuju suatu tempat untuk mempertanggungjawabkan perbuatannya. Tempat yang dimaksud adalah . . . ',
          answers: [
            {
              ans: ' Siratalmustakim',
              correct: false,
              isSelected: false
            },
            {
              ans: 'Surga',
              correct: false,
              isSelected: false
            },
            {
              ans: 'Neraka',
              correct: false,
              isSelected: false
            },
            {
              ans: 'Padang mahsyar',
              correct: true,
              isSelected: false
            }
          ]
        },
        {
          question: 'Alam siksa/kubur disebut juga . . .',
          answers: [
            {
              ans: ' Alam barzakh ',
              correct: true,
              isSelected: false
            },
            {
              ans: 'Yaumul tanad',
              correct: false,
              isSelected: false
            },
            {
              ans: 'Yaumul hisab',
              correct: false,
              isSelected: false
            },
            {
              ans: ' Alam semesta',
              correct: false,
              isSelected: false
            }
          ]
        },
        {
          question:
            'Malaikat Allah SWT yang bertugas mencatat amal kebaikan yang dikerjalan manusia adalah . . .',
          answers: [
            {
              ans: ' Munkar ',
              correct: false,
              isSelected: false
            },
            {
              ans: ' Nakir',
              correct: false,
              isSelected: false
            },
            {
              ans: 'Rakib',
              correct: true,
              isSelected: false
            },
            {
              ans: 'Atid',
              correct: false,
              isSelected: false
            }
          ]
        },
        {
          question: 'Dibangkitkannya nyawa manusia dari alam kubur ditandai dengan . . .',
          answers: [
            {
              ans: 'Ditiupnya sangkakala oleh Malaikat Izrail',
              correct: false,
              isSelected: false
            },
            {
              ans: 'Ditiupnya sangkakala oleh Malaikat Israfil ',
              correct: true,
              isSelected: false
            },
            {
              ans: 'Suara burung hud-hud',
              correct: false,
              isSelected: false
            },
            {
              ans: 'Bangkitnya Rasulullah saw',
              correct: false,
              isSelected: false
            }
          ]
        },
        {
          question: 'Pernyataan yang merupakan perilaku orang yang beriman kepada hari akhir adalah …',
          answers: [
            {
              ans: 'Tidak merasa iri atas nikmat orang lain',
              correct: true,
              isSelected: false
            },
            {
              ans: 'Dunia dan seluruh isinya merupakan tujuan akhir',
              correct: false,
              isSelected: false
            },
            {
              ans: 'Tergiur oleh gemerlapnya dunia',
              correct: false,
              isSelected: false
            },
            {
              ans: 'Cinta dunia harta secara berlebihan',
              correct: false,
              isSelected: false
            }
          ]
        }
      ],
      count: 0,
      isFinish: false
    };
  }

  selectAnswer(index) {
    const data = this.state.questionAnswer;
    console.log(this.state.questionAnswer[this.state.count].answers[index]);

    data[this.state.count].answers.map((m, v) => {
      if (v === index) {
        m.isSelected = true;
      } else {
        m.isSelected = false;
      }
    });
    this.setState({ questionAnswer: data });
  }

  renderQuestion() {
    if (this.state.isFinish === false) {
      return (
        <View>
          <View style={styles.gridCol}>
            <Text style={styles.gridText}>Q{this.state.count + 1} : </Text>

            <Text style={styles.gridTextvalue}>{this.state.questionAnswer[this.state.count].question}</Text>
          </View>

          <View style={styles.gridColAnswer}>
            {this.state.questionAnswer[this.state.count].answers.map((m, v) => (
              <View key={v}>
                <View style={{ flexDirection: 'row', paddingTop: 20 }}>
                  <CheckBox
                    checked={m.isSelected}
                    color={COLOR_BASE_PRIMARY_MAIN}
                    onPress={this.selectAnswer.bind(this, v)}
                  />
                  <Text style={{ paddingLeft: 20 }}>{m.ans}</Text>
                </View>
              </View>
            ))}
          </View>
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <Text style={styles.text}>Finish</Text>

        <Button onPress={this._onPressBack.bind(this)} rounded style={styles.buttonStyleExit}>
          <Text>Close Quiz</Text>
        </Button>
      </View>
    );
  }

  _onPressBack() {
    const { goBack } = this.props.navigation;
    goBack();
  }

  exitApp() {
    BackHandler.exitApp();
  }

  next() {
    if (this.state.count !== 4) {
      this.setState({ count: this.state.count + 1, isFinish: false });
    } else {
      this.setState({ isFinish: true });
    }
  }

  renderButton() {
    return <Button onPress={this.next.bind(this)} title="Next" style={styles.buttonStyle} />;
  }
  render() {
    return (
      <Container>
        <Header style={{ backgroundColor: COLOR_BASE_PRIMARY_MAIN }}>
          <Left>
            <TouchableOpacity style={styles.ButtonRight} onPress={this._onPressBack.bind(this)}>
              <SvgBack />
            </TouchableOpacity>
          </Left>
          <Body>
            <Title>Quiz</Title>
          </Body>
          <Right />
        </Header>

        <Content>
          {this.renderQuestion()}

          {this.state.isFinish === false ? this.renderButton() : null}
        </Content>
      </Container>
    );
  }
}
