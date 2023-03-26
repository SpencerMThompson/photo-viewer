import React, { Component } from 'react';
import {
  Dimensions,
  Image,
  Text,
  ScrollView,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import PostContainer from './PostContainer';
import PhotoViewer from './PhotoViewer';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();
setTimeout(SplashScreen.hideAsync, 2000);

const image1 = require('./images/01.png');
const image2 = require('./images/02.png');
const image3 = require('./images/03.png');
const image4 = require('./images/04.png');
const image5 = require('./images/05.png');
const image6 = require('./images/06.png');
const image7 = require('./images/07.png');

const timeline = [
  { title: 'Great Wall of China', image: image1 },
  { title: 'Petra', image: image2 },
  { title: 'The Redeemer', image:  image3 },
  { title: 'Machu Picchu', image: image4 },
  { title: 'Chichen Itza', image: image5 },
  { title: 'Colosseum', image: image6 },
  { title: 'Taj Mahal', image: image7 },
];

export default class App extends Component {
  state = {
    selected: null,
    position: null,
  };

  showImage = (selected, position) => {
    this.setState({
      selected,
      position,
    });
  }

  closeViewer = () => {
    this.setState({
      selected: null,
      position: null,
    });
  }

  renderViewer() {
    const { selected, position } = this.state;

    if (selected) {
      return (
        <PhotoViewer
          post={selected}
          position={position}
          onClose={this.closeViewer}
        />
      );
    }
  }

  render() {
    return (
      <SafeAreaView style={styles.main}>
        <Text style={styles.toolbar}>Seven Wonders of the World</Text>
        <ScrollView style={styles.content}>
        {
          timeline.map((post, index) =>
            <PostContainer key={index} post={post}
            onPress={this.showImage}/>
          )
        }
        </ScrollView>
        {this.renderViewer()}
      </SafeAreaView>
    );
  }

}

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#ecf0f1',
    flex: 1,
  },
  toolbar: {
    backgroundColor: '#2c3e50',
    color: '#fff',
    fontSize: 22,
    padding: 20,
    textAlign: 'center',
  },
  content: {
    flex: 1,
  },
});