import React, { Component } from 'react';
import {  View, Image, TouchableOpacity, Text, Dimensions } from 'react-native';
import _ from 'lodash';

const deviceHeight = Dimensions.get('window').height;

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Songs',

    };

  }


  render() {
    const { songs } = this.props;
    return (
      <View style={{ backgroundColor: '#ffffff' }}>
        <View style={{ marginLeft: 5, marginRight: 5, marginTop: 10, backgroundColor: '#f1f1f1' }}>
          {songs.map(
            (data, index) => {
              return (
                <View style={{ marginBottom: 10, marginLeft: 5, marginRight: 5 }} key={index}>
                  <TouchableOpacity onPress={() => this.props.navigation.navigate('DetailsContainer',data)}>
                  <View style={{ padding: 10, borderRadius: 10, flexDirection: 'row', justifyContent: 'space-around', backgroundColor: '#BCECF4' }}>
                    <View>
                      <Image
                        style={{resizeMode : 'stretch'}}
                        source={{uri: 'https://is2-ssl.mzstatic.com/image/thumb/Music/v4/d3/a4/a7/d3a4a745-5e5a-f943-0545-3d345964c7e5/source/100x100bb.jpg'}}
                      />
                    </View>
                    <View style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
                      <Text style={{ color: '#000000' }} >
                        {data.artistName}

                      </Text>
                      <Text style={{ color: 'grey' }} >
                        {data.trackName}

                      </Text>
                    </View>
                  </View>
                  </TouchableOpacity>

                </View>
              );
            })
          }
        </View>
      </View>
    );


  }
}
