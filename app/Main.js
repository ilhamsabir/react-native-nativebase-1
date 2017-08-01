import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Text } from 'native-base';
import { Router, Scene } from 'react-native-router-flux';
import { StackNavigator } from 'react-navigation';

import AppHeaders from './components/layouts/AppHeaders';
import Footers from './components/layouts/BottomFooters';
import { Tabs } from './Router';

export default class Main extends Component {
  render() {
    return (
     <Container>        
        <AppHeaders />
        <Tabs />
      </Container>
    );
  }
}