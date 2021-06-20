import React, { Component } from 'react';
import { Spinner } from 'native-base';
import {SkypeIndicator} from 'react-native-indicators';
import {
  ActivityIndicator
} from 'react-native';

export default class LoadingSpinner extends Component {
  render() {
    const { size } = this.props;
    return (
      <SkypeIndicator color={this.props.color} size={size ? size : 40}/>
    )
  }
}
