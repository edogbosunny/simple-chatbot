
import { View, Text, Button, Image, StyleSheet, TouchableHighlight, TextInput } from 'react-native';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BotImage } from '../../image'
import { saveInputData } from '../../actions/index'
import Icon from 'react-native-vector-icons/FontAwesome';

class DiagnosisOwner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stepIndex: this.props.stepIndex,
      loading: true,
      value: '',
      trigger: '6',
      steps: this.props.steps,
      waitAction: this.props.step.waitAction,
      inputData: {},
      name: ""
    };
    // this.props.triggerNextStep(this.state);
  }

  render() {
    // const myIcon2 = <Icon name="comments" size={30} color="#900" solid />;
    return (
      <View>
        <Image
          source={{ uri: BotImage }}
          style={this.styles.customBotImage} />
        <Text style={this.styles.textViewDimensions}>
          Ok, to give an accurate dignosis I need additional
          information about the person you are assessing for
        </Text>

        <Text style={this.styles.textViewDimensions}>Please note that this diagnosis does not entirely replace
        What is the full name of the person you are assessing for?</Text>
        <View style={this.styles.alignButton}>
          <TextInput style={this.styles.input}
            underlineColorAndroid="transparent"
            placeholder="Type message..."
            onChangeText={(name) => {
              this.props.saveInputData({ patientsName: name })
              const a = this.setState({ name })
              return a
            }}
            value={this.state.name}
            placeholderTextColor="#C4C4C4"
            autoCapitalize="none"
          // onChangeText={this.handlePassword}
          >
          </TextInput>
          <TouchableHighlight onPress={(e) => {
            this.props.triggerNextStep(this.state);
            console.log('i was clicked', e)
          }}>
            <Icon
              name="send"
              size={30}
              color="#8E8E93"
              style={this.styles.icon} />
          </TouchableHighlight>
          <View >
          </View>
        </View>
      </View>
    );
  }

  styles = StyleSheet.create({
    customBotImage: {
      width: 60,
      height: 60,
      marginTop: 20,
      marginBottom: 20
    },
    textViewDimensions: {
      paddingLeft: 15,
      paddingBottom: 20
    },
    textMargin: {
      paddingLeft: 15,
      paddingBottom: 10
    },
    icon: {
      marginRight: 250,
      justifyContent: 'flex-end'
    },
    alignButton: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingTop: 10
    },
    buttonText: {
      color: '#fff'
    },
    input: {
      width: 250,
      margin: 15,
      height: 40,
      borderColor: '#C4C4C4',
      borderWidth: 1,
      color: 'rgba(60, 60, 67, 0.6)',
      // placeholderTextColor: '#C4C4C4'
    },
  });
}

const mapStateToProps = (state) => {
  // console.log('aaaaaa', state)
  const spreadObject = { ...state.inputDataReducer.inputData, ...state.patientsName }
  console.log('ade-->', spreadObject);
  return {
      patientsName: spreadObject
  }
};


export default connect(mapStateToProps, { saveInputData })(DiagnosisOwner);
