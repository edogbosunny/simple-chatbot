
import { View, Text, Button, Image, StyleSheet, TouchableOpacity } from 'react-native';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BotImage } from '../../image'
import { saveInputData } from '../../actions/index'

class TestAssessmentResponse extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stepIndex: this.props.stepIndex,
      loading: true,
      value: '',
      trigger:
        () => {
        if (this.props.inputDataReducer.inputData.assesmentOwner === 'Myself') {
          return '7'
        }
        else {
          return '5'
        }
      },
      steps: this.props.steps,
      waitAction: this.props.step.waitAction,
      inputData: {},
    };

    this.props.triggerNextStep(this.state);
  }

  render() {
    return (
      <View>
        <Text style={this.styles.textViewDimensions}>
          {this.props.inputDataReducer.inputData.assesmentOwner || 'demo'}
        </Text>
      </View>
    );
  }

  styles = StyleSheet.create({
    textViewDimensions: {
      paddingRight: 15,
      alignSelf: 'flex-end',
    }
  });
}

const mapStateToProps = (state) => {
  // console.log('aaaaaa', state)
  return {
    inputDataReducer: {
      testAssessmentResponse: state.inputDataReducer.inputData
    }
  }
};


export default connect(mapStateToProps, { saveInputData })(TestAssessmentResponse);
