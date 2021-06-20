import React, { Component } from 'react';
import _ from 'lodash';
import {  ScrollView } from 'react-native';
import Details from './Details'


export default class DetailsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    
    }
  }

  render() {
    const {params} = this.props.navigation.state;
      return (
        <ScrollView keyboardShouldPersistTaps='always' keyboardDismissMode='on-drag' showsVerticalScrollIndicator={false}>
          <Details
            songs={params}
            navigation={this.props.navigation}
          />
          
        </ScrollView>
      );
      }
    }
