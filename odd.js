// import React, { Component } from 'react';
// import ChatBot from 'react-native-chatbot';
// import { StyleSheet, View, Text, TouchableOpacity, Button } from 'react-native';
// import { BotImage } from './src/image'
// import TestComponent from './test';
// import TextInput from './input';
// import axios from 'axios';
// import moment from 'moment';


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
//         message: "Hello Afiong I am here to help you.",
//         trigger: "1"
//       },
//       {
//         id: "1",
//         message: `Please note that this diagnosis does not cover upor proper Medical checkup. Talk to your doctor if you are feeling unsual or in casess of emergency`,
//         trigger: "2"
//         // end: true
//       },
//       {
//         id: "2",
//         component: <Button title="Continue" />,
//         // component: <View style={{ flex: 1 }}><Text>Hello world</Text></View>,
//         // message: `Please note that this diagnosis does not cover upor proper Medical checkup. Talk to your
//         // doctor if you are feeling unsual or in casess of emergency`,
//         trigger: "3"
//         // end: true
//       },
//       {
//         id: "3",
//         // message: "Who is this assesment for?",
//         component: <View><Text>Hello</Text></View>,
//         trigger: "4"
//       },
//       {
//         id: "4",
//         // message: "Who is this assesment for?",
//         options: [
//           { value: 'myself', label: 'Myself', trigger: '3' },
//           { value: 'someoneElse', label: 'Someone Else', trigger: '5' }
//         ],
//         // end: true
//       },
//       {
//         id: "5",
//         message: "Who is this assesment for?",
//         delay: 1000,
//         trigger: () => {
//           const data = async () => {
//             let a = await axios.get('https://jsonplaceholder.typicode.com/posts')
//             // console.log('---->', a)
//             return a
//           }
//           if (data() !== null) {
//             console.warn('>?>?>?', data())
//             return '6'
//           }
//           // console.warn('-->>', data());
//           // let a = await axios.get('https://jsonplaceholder.typicode.com/posts')
//           // // if (a) {
//           // console.warn(a)
//           // console.log(a)
//           // return '6'
//           // }
//           return '9'
//         },

//         //   setTimeout(async () => {
//         //   console.warn('i don show');
//         //   return '6'
//         // }, 10000)

//       },
//       {
//         id: "6",
//         message: "data here",
//         trigger: "8"
//       },
//       {
//         id: "8",
//         message: "right Done",
//         // trigger: "6"
//         end: true
//       },
//       {
//         id: "9",
//         message: "wrong Done",
//         // trigger: "6"
//         end: true
//       },
//       // {
//       //   id: "3",
//       //   user: true,
//       //   // trigger: "2"
//       //   end: true
//       // },
//       // {
//       //   id: '3',
//       //   options: [
//       //     { value: 'one', label: 'Number 1', trigger: '4' },
//       //     { value: 'two', label: 'Number 2', trigger: '5' },
//       //     { value: 'three', label: 'Number 3', trigger: '6' },
//       //   ],
//       // },
//       // {
//       //   id: "4",
//       //   message: "No 4!",
//       //   trigger: "5"
//       // },
//       // {
//       //   id: "5",
//       //   message: "no 5!",
//       //   trigger: "6"
//       // },
//       // {
//       //   id: "6",
//       //   message: "no 6!",
//       //   trigger: (value) => {
//       //     console.warn('----->', value);
//       //     return '7'
//       //   }
//       // },
//       // {
//       //   id: "7",
//       //   message: "no 6!",
//       //   trigger: "8"
//       // },
//       // {
//       //   id: "8",
//       //   message: "Bye!",
//       //   end: true
//       // }
//     ];
//     // let colz = '#eee'
//     // let customStyle = {
//     //   color: 'blue',
//     // }


//     //   <ChatBot
//     //   steps={steps}
//     //   botAvatar={BotImage}
//     //   avatarStyle={styles.avatar}
//     //   avatarWrapperStyle={styles.avatarWrapper}
//     //   style={styles.mainStyle}
//     //   customStyle={{color: 'green'}}
//     //   contentStyle={styles.mainStyle}
//     //   bubbleStyle={styles.avatarText}
//     //   botFontColor='#000'
//     //   hideUserAvatar={true}
//     //   userBubbleStyle={styles.userText}
//     // // userAvatar="none"
//     //   />
//     // calcSec = async () => {
//     //   var a = moment();
//     //   const res = await setTimeout(() => {
//     //     let b = moment()
//     //     // console.warn('called')
//     //     console.warn('--->', b.diff(a, 'seconds'));
//     //     const data = b.diff(a, 'seconds');
//     //     return data
//     //   }, 5000);
//     //   console.warn('--l->', await res)
//     // }
//     // calcSec();
//     // var b = moment();
//     // var a = moment([2007, 0, 29]);
//     // console.warn(b.diff(a, 'seconds'));


//     return (
//       <View style={{ flex: 1, paddingTop: 70 }}>
//         <ChatBot steps={steps} optionStyle={this.styles.optionStyle} />
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
//     avatarWrapper: {
//       // flex: 1,
//       // flexDirection: 'column',
//       // backgroundColor: '#fff',
//       // borderColor: '#fff'
//     },
//     avatar: {
//       // flex: 1,
//       // flexDirection: 'column',
//       // justifyContent: 'flex-start',
//       // position: 'relative',
//       // resizeMode: "cover",
//       // left: '4.27 %',
//       // right: '77.07 %',
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
//       backgroundColor: 'green'
//     }
//   });
// }
//  UselessTextInput = () => {
//   const [value, onChangeText] = React.useState('');
//   console.warn('>>MS>S', value);
//   const arr = [...value];
//   return (
//     <TextInput
//       placeholder="Enter Your Ailments"
//       style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
//       onChangeText={text => onChangeText(text)}
//       value={value}
//     />
//   );
// }


// export default App;
