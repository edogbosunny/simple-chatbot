// import React, { Component } from 'react';
// import ChatBot from 'react-native-chatbot';
// import { StyleSheet, View, Text, TouchableOpacity, Button } from 'react-native';
// import { BotImage } from './src/image'
// import TestComponent from './test';
// import TextInput from './input';
// import TextInputData from './input-data';
// import axios from 'axios';
// import { getDiagnosis } from './src/actions'
// import { connect } from 'react-redux';

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       payload: {}
//     };
//   }


//   render() {
//     const steps = [
//       {
//         id: "0",
//         component: <TestComponent />,
//         // message: "Hello Afiong I am here to help you.",
//         // trigger: "1"
//       },
//       {
//         id: "1",
//         message: `Please note that this diagnosis does not cover upor proper Medical checkup. Talk to your doctor if you are feeling unsual or in casess of emergency`,
//         trigger: "2"
//       },
//       {
//         id: "2",
//         message: 'who is this result meant for?',
//         trigger: "3"
//       },
//       {
//         id: "3",
//         options: [
//           { value: 'myself', label: 'Myself', trigger: '6' },
//           { value: 'someoneElse', label: 'Someone Else', trigger: '4' }
//         ],
//       },
//       {
//         id: "4",
//         message: 'Please enter the full name of the person.',
//         trigger: "5"
//       },
//       {
//         id: "5",
//         user: true,
//         trigger: "6"
//       },
//       {
//         id: "6",
//         message: 'please enter your age.',
//         trigger: "7"
//       },
//       {
//         id: "7",
//         user: true,
//         trigger: "8"
//       },
//       {
//         id: "8",
//         message: 'Please enter your symptoms.',
//         trigger: "9"
//       },
//       {
//         id: "9",
//         user: true,
//         trigger: "10"
//       },
//       {
//         id: "10",
//         message: 'Do you have a travel history?',
//         trigger: "11"
//       },
//       {
//         id: "11",
//         options: [
//           { value: 'travelHistoryTrue', label: 'Yes', trigger: '12' },
//           { value: 'travelHistoryFalse', label: 'No', trigger: '12' }
//         ],
//       },
//       {
//         id: "12",
//         message: 'Please note that this diagnosis is based on the data derived from people who had similiar symptoms. kindly seek medical attention if symptoms persist',
//         trigger: ({ value, steps }) => {
//           console.log('--props', this.props);
//           this.props.getDiagnosis();
//           console.log('---->', steps);
//           return '13'
//         },
//         delay: 600
//       },
//       {
//         id: "13",
//         message: "right Done",
//         end: true
//       },

//     ];

//     console.log('uauuauua', this.props)
//     return (
//       <View style={{ flex: 1, paddingTop: 70 }}>
//         <ChatBot steps={steps}
//           optionStyle={this.styles.optionStyle}
//           bubbleStyle={this.styles.bubbleStyle}
//           optionElementStyle={this.styles.optionElementStyle}
//           botFontColor='#000'
//           botAvatar={BotImage}
//           avatarWrapperStyle={this.styles.avatarWrapperStyle}
//         />
//       </View>
//     );
//   };

//   styles = StyleSheet.create({
//     mainStyle: {
//       backgroundColor: '#eee'
//     },
//     main: {
//       paddingTop: '20%',
//       flex: 1,
//     },
//     avatarWrapperStyle: {
//       borderColor: '#eee',
//       backgroundColor: '#eee'
//     },
//     avatar: {
//       width: 40,
//       height: 40,
//     },
//     avatarText: {
//       flex: 1,
//       flexDirection: 'column',
//       position: 'relative',
//       color: '#141823',
//       // marginBottom:-10,
//       alignContent: 'flex-start',
//       backgroundColor: '#fff',
//       width: '100%',
//       height: 80,
//       top: '25.38 %',
//     },
//     userText: {
//       position: 'relative',
//       color: '#141823',
//       backgroundColor: '#fff',
//       // width: '100%',
//       marginTop: -20,
//       // marginBottom: 70,
//       height: 80,
//       top: '30.38 %',
//     },
//     optionStyle: {
//       flex: 1,
//       position: 'relative',
//       flexDirection: 'column',
//       backgroundColor: '#eee'
//     },
//     bubbleStyle: {
//       // color: '#000',
//       backgroundColor: '#eee',
//     },
//     optionElementStyle: {
//       backgroundColor: '#00ABE2',
//       textAlign: 'center',
//       alignItems: 'center',
//       borderRadius: 0
//     }
//   });
// }

// export const mapStateToProps = state => {
//   return {
//     payload: state.payload
//   };
// }
// export default connect(mapStateToProps, { getDiagnosis })(App);
