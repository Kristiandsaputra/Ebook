import React from 'react';
import { View, StatusBar, Text, SafeAreaView, Button, ButtonContainer, Alert } from 'react-native';
import styles from './styles';

export default class Component extends React.Component {
  state = {
    correctCount: 0,
    totalCount: this.props.navigation.getParam('questions', []).length,
    activeQuestionIndex: 0,
    answered: false,
    answerCorrect: false
  };

  answer = correct => {
    this.setState(
      state => {
        const nextState = { answered: true };

        if (correct) {
          nextState.correctCount = state.correctCount + 1;
          nextState.answerCorrect = true;
        } else {
          nextState.answerCorrect = false;
        }

        return nextState;
      },
      () => {
        setTimeout(() => this.nextQuestion(), 750);
      }
    );
  };

  nextQuestion = () => {
    this.setState(state => {
      const nextIndex = state.activeQuestionIndex + 1;

      if (nextIndex >= state.totalCount) {
        this.props.navigation.popToTop();
      }

      return {
        activeQuestionIndex: nextIndex,
        answered: false
      };
    });
  };

  render() {
    const questions = this.props.navigation.getParam('questions', []);
    const question = questions[this.state.activeQuestionIndex];

    return (
      <View style={[styles.container, { backgroundColor: this.props.navigation.getParam('color') }]}>
        <StatusBar barStyle="light-content" />
        <SafeAreaView style={styles.safearea}>
          <View>
            <Text style={styles.text}>{question.question}</Text>

            <ButtonContainer>
              {question.answers.map(answer => (
                <Button key={answer.id} text={answer.text} onPress={() => this.answer(answer.correct)} />
              ))}
            </ButtonContainer>
          </View>

          <Text style={styles.text}>{`${this.state.correctCount}/${this.state.totalCount}`}</Text>
        </SafeAreaView>
        <Alert correct={this.state.answerCorrect} visible={this.state.answered} />
      </View>
    );
  }
}
