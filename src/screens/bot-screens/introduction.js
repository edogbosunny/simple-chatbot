
import { View, Text, Button, Image, StyleSheet, TouchableOpacity } from 'react-native';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BotImage } from '../../image'
import { saveInputData } from '../../actions/index'

class IntroductionComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stepIndex: this.props.stepIndex,
      loading: true,
      value: '',
      trigger: '1',
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
          Hello Affiong!
        </Text>
        <Text style={this.styles.textMargin}>
          I am here to help</Text>
        <Text style={this.styles.textViewDimensions}>Please note that this diagnosis does not entirely replace
        proper medical checkups. Talk to your doctor in cases
        of emergency or if symptoms persist</Text>
        <View style={this.styles.alignButton}>
          <TouchableOpacity
            style={this.styles.button}
            title="Continue"
            onPress={() => {
              this.props.saveInputData('hello');
              this.props.triggerNextStep(this.state);
            }}>
            <Text style={this.styles.buttonText}>Continue</Text>
          </TouchableOpacity>

        </View>
      </View>
    );
  }

  styles = StyleSheet.create({
    customBotImage: {
      width: 60,
      height: 60,
      marginTop: 200,
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
      alignItems: 'center',
      backgroundColor: "#00ABE2",
      color: '#000',
      padding: 10,
      width: 200,
      flex: 1,
      borderRadius: 4,
    },
    alignButton: {
      alignItems: 'center',
      paddingTop: 50
    },
    buttonText: {
      color: '#fff'
    }
  });
}

const mapStateToProps = (state) => {
  return {
    introduction: state.inputDataReducer.inputData
  }
};


export default connect(mapStateToProps, { saveInputData })(IntroductionComponent);
