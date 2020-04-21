
import { View, Text, Button, Image, StyleSheet, TouchableOpacity } from 'react-native';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BotImage } from '../../image'
import { saveInputData } from '../../actions/index'

class DiagnosisOwnerResponse extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stepIndex: this.props.stepIndex,
      loading: true,
      value: '',
      trigger: '7',
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
          {this.props.inputDataReducer.inputData.patientsName || ''}
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
  return {
      diagnosisOwnerResponse: state.inputDataReducer.inputData
  }
};


export default connect(mapStateToProps, { saveInputData })(DiagnosisOwnerResponse);
