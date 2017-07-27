import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title, StyleProvider } from 'native-base';
import {
  StatusBar
} from 'react-native';
import getTheme from './../../../native-base-theme/components';

export default class AppHeaders extends Component {
  render() {
    return (
      <StyleProvider style={getTheme()}>
        <Header style={{ backgroundColor: '#fff', shadowColor: 'transparent', shadowOpacity: 0, elevation: 3}}>
           <StatusBar
              backgroundColor= '#039BE5'
              barStyle="light-content"
              />         
          <Body>
            <Title>Heder</Title>
          </Body>
        </Header>
       </StyleProvider>
    );
  }
}