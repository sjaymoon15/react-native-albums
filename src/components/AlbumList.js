import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

class AlbumList extends Component {
  state = { albums: [] };
  componentWillMount() {
    fetch('https://rallycoding.herokuapp.com/api/music_albums')
    .then(res => res.json())
    .then(res => this.setState({ albums: res }));
  }
  renderAlbums() {
    return this.state.albums.map(album => <Text key={album.url}>{album.title}</Text>);
  }
  render() {
    console.log(this.state);
    return (
      <View>
        {this.renderAlbums()}
      </View>
    );
  }
}

export default AlbumList;
