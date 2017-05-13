import React from 'react';
import Animation from 'lottie-react-native';
import { StyleSheet, Dimensions } from 'react-native'
export default class App extends React.Component {
  componentDidMount() {
    this.animation.play()
  }

  render() {
    return (
        <Animation
          ref={animation => { this.animation = animation; }}
          style={styles.animation} loop
          source={require('./assets/lottie.json')}
        />
    );
  }
}


const styles = StyleSheet.create({
  animation: {
    flex: 1
  }
});
