import React, { Component } from 'react';
import _ from 'lodash';
import LoadingSpinner from '../spinner';
import { Dimensions, View, ScrollView } from 'react-native';
import Home from './Home'

const deviceHeight = Dimensions.get('window').height;


export default class HomeContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      songs: [],
      isLoading: false,
    }
  }


  async componentDidMount() {
   await this.fetchSongs();
  }

  fetchSongs = async () => {

    fetch('https://itunes.apple.com/search?term=Michael+jackson', {
      method: 'GET'
   })
   .then((response) => response.json())
   .then((responseJson) => {
      this.setState({
        songs: responseJson
      })
   })
   .catch((error) => {
      console.error(error);
   });


  }

  render() {
    const { songs, isLoading } = this.state;

    if (!_.isEmpty(songs)) {
      return (
        <ScrollView keyboardShouldPersistTaps='always' keyboardDismissMode='on-drag' showsVerticalScrollIndicator={false}>
          <Home
            songs={songs.results}
            navigation={this.props.navigation}
            isLoading={isLoading}
          />
        </ScrollView>
      );
    } else {
      return (
        <View style={{
          justifyContent: 'center',
          alignItems: 'center',
          height: deviceHeight,
          color: '#fff'
        }}>
          <LoadingSpinner color="#00678F" />
        </View>
      );
    }
  }
}
