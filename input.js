import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
// import { connect } from 'react-redux';
class Inputs extends Component {
   // state = {
   //    email: '',
   //    password: ''
   // }
   // handleEmail = (text) => {
   //   this.setState({ email: text })
   //   console.log('---,,,,', this.state);
   // }
   // handlePassword = (text) => {
   //    this.setState({ password: text })
   // }
   // login = (email, pass) => {
   //    alert('email: ' + email + ' password: ' + pass)
   // }
   
   render() {
   //  console.log('----->', this.props)
      return (
        <View style={styles.container}>
          <Text>Hello World</Text>
           { /*// <TextInput style = {styles.input} 
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Email"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {this.handleEmail}/>
            
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Password"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {this.handlePassword}/>
            
            <TouchableOpacity
               style = {styles.submitButton}
               onPress = {
                  () => this.login(this.state.email, this.state.password)
               }>
               <Text style = {styles.submitButtonText}> Submit </Text>
            </TouchableOpacity> */}
         </View>
      )
   }
}
// export default Inputs

const styles = StyleSheet.create({
   container: {
      paddingTop: 23
   },
   input: {
      margin: 15,
      height: 40,
      borderColor: '#7a42f4',
      borderWidth: 1
   },
   submitButton: {
      backgroundColor: '#7a42f4',
      padding: 10,
      margin: 15,
      height: 40,
   },
   submitButtonText:{
      color: 'white'
   }
})

// export const mapStateToProps = state => {
//   console.log('state--->', state)
//   return {
//     payload: state.getDiagnosis.payload,
//     // auth: state.getDiagnosis.auth
//   };
// }
export default Inputs;
  // export default connect(mapStateToProps)(Inputs);