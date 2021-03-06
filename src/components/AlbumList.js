import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
  state = { albums: [] };
  componentWillMount() {
    fetch('https://rallycoding.herokuapp.com/api/music_albums')
    .then(res => res.json())
    .then(res => this.setState({ albums: res }));
  }
  renderAlbums() {
    return this.state.albums.map(album =>
      <AlbumDetail key={album.url} album={album} />
    );
  }
  render() {
    console.log(this.state);
    return (
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
    );
  }
}

export default AlbumList;
