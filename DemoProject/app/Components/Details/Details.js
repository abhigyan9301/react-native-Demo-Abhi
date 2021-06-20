import React, { Component } from 'react';
import { View,  Text, Dimensions } from 'react-native';
import _ from 'lodash';

const deviceHeight = Dimensions.get('window').height;

export default class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Details',

    };

  }

  render() {
    const { songs,  } = this.props;
    return (
      <View style={{ backgroundColor: '#ffffff' }}>
        <View style={{ marginLeft: 5, marginRight: 5, marginTop: 10, backgroundColor: '#f1f1f1' }}>

                <View style={{ marginBottom: 10, marginLeft: 5, marginRight: 5 }}>
                  <View style={{ padding: 10, borderRadius: 10, flexDirection: 'row', justifyContent: 'space-around', backgroundColor: '#BCECF4' }}>
                    <View style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
                      <Text style={{ color: '#000000' }} >
                        {songs.artistName}

                      </Text>
                      <Text style={{ color: 'grey' }} >
                        {songs.trackName}

                      </Text>
                    </View>
                  </View>


                </View>
        
        </View>
      </View>
    );


  }
}
