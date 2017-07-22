/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Container, Content, Footer, FooterTab, Button, Icon } from 'native-base';
import Main from './app/Main';

export default class AwesomeNativeBase extends Component {
  render() {
    return (
      <Container>        
        <Main />
      </Container>
      
    );
  }
}

AppRegistry.registerComponent('AwesomeNativeBase', () => AwesomeNativeBase);
