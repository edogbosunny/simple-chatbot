
import { View, Text, Button, Image, StyleSheet, TouchableOpacity } from 'react-native';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BotImage } from '../../image'
import { saveInputData } from '../../actions/index'

class GenderQuestionScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stepIndex: this.props.stepIndex,
      loading: true,
      value: '',
      trigger: '2',
      steps: this.props.steps,
      waitAction: this.props.step.waitAction,
      inputData: {},
    };
  }
  render() {
    return (
      <View>
        <Image
          source={{ uri: BotImage }}
          style={this.styles.customBotImage} />
        <Text style={this.styles.textViewDimensions}>
          What is John Doe’s gender?
        </Text>

        <View style={this.styles.alignButton}>
          <TouchableOpacity
            style={this.styles.button}
            title="Gender"
            onPress={() => {
              this.props.saveInputData({ gender: 'male' });
              this.props.triggerNextStep(this.state);
            }}>
            <Text style={this.styles.buttonText}>Male</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={this.styles.button}
            title="Gender"
            onPress={() => {
              this.props.saveInputData({ gender: 'female' });
              this.props.triggerNextStep(this.state);
            }}>
            <Text style={this.styles.buttonText}>Female</Text>
          </TouchableOpacity>

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
    },
    textMargin: {
      paddingLeft: 15,
      paddingBottom: 10
    },
    button: {
      padding: 10,
      width: 200,
      flex: 1,
      borderRadius: 4,
    },
    alignButton: {
      // alignItems: 'center',
      paddingTop: 50
    },
    buttonText: {
      color: '#00ABE2'
    }
  });
}

const mapStateToProps = (state) => {
  // console.log('aaaaaa', state)
  return {
    inputDataReducer: {
      gender: state.inputDataReducer.inputData
    }
  }
};


export default connect(mapStateToProps, { saveInputData })(GenderQuestionScreen);
