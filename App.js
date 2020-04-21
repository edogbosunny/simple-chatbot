import React, { Component } from 'react';
import ChatBot from 'react-native-chatbot';
import { StyleSheet, View } from 'react-native';
import IntroductionComponent from './src/screens/bot-screens/introduction';
import TestComponentScreen from './src/screens/bot-screens/test-assessment-screen';
import TestAssesmentResponse from './src/screens/bot-screens/test-assesment-response';
import DiagnosisOwner from './src/screens/bot-screens/diagnosis-owner';
import DiagnosisOwnerResponse from './src/screens/bot-screens/diagnosis-owner-response';
import GenderQuestion from './src/screens/bot-screens/gender-question';
class App extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    const steps = [
      {
        id: "0",
        component: <IntroductionComponent />,
        // component: <DiagnosisOwner />,
        waitAction: true,
      },
      {
        id: "1",
        component: <TestComponentScreen />,
        waitAction: true,
      },
      {
        id: "2",
        component: <TestAssesmentResponse />,
        waitAction: true,
      },
      // {
      //   id: "3",
      //   component: <DiagnosisOwner />,
      //   waitAction: true,
      // },
      {
        id: "4",
        message: 'component 4',
        trigger: "6"
      },
      {
        id: "5",
        component: <DiagnosisOwner />,
        waitAction: true,
      },
      {
        id: "6",
        component: <DiagnosisOwnerResponse />,
        waitAction: true
      },
      {
        id: "7",
        component: <GenderQuestion />,
        waitAction: true
      },
      {
        id: "8",
        message: "right Done",
        end: true
      },

    ];

    return (
      <View style={{ flex: 1, paddingTop: 70 }}>
        <ChatBot steps={steps} />
      </View>
    );
  };

  styles = StyleSheet.create({
  });
}

export default App;
