import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import { connect } from 'react-redux';
import { getDiagnosis } from './src/actions';
class Inputs extends Component {
  constructor() {
    super();
    state = {
      email: '',
      password: ''
    }
  }
  handleEmail = (text) => {
    this.setState({ email: text })
    // console.log('---,,,,', this.props);
  }
  handlePassword = (text) => {
    this.setState({ password: text })
  }
  login = (email, pass) => {
    this.props.getDiagnosis({email, pass});
    alert('email: ' + email + ' password: ' + pass)
  }
  render() {
    return (
      <View>
        <Text>Hello World</Text>
        <TextInput style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Email"
          placeholderTextColor="#9a73ef"
          autoCapitalize="none"
          onChangeText={this.handleEmail} />

        <TextInput style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Password"
          placeholderTextColor="#9a73ef"
          autoCapitalize="none"
          onChangeText={this.handlePassword} />

        <TouchableOpacity
          style={styles.submitButton}
          onPress={
            () => this.login(this.state.email, this.state.password)
          }>
          <Text style={styles.submitButtonText}> Submit </Text>
        </TouchableOpacity>
      </View>
    )
  }
}

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
  submitButtonText: {
    color: 'white'
  }
})

// const mapDispatchToProps = dispatch => {
  // console.log('----->', dispatch);
  // return {
  //   getDiagnosis: () => dispatch(getDiagnosis())
  //   // dispatch
  // }
// }

export const mapStateToProps = state => {
  console.log('state--->', state)
  return {
    payload: state,
    auth: state
  };
}

export default connect(mapStateToProps, { getDiagnosis })(Inputs);
