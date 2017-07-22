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
        <Header>
           <StatusBar
              backgroundColor= '#b1b1b1'
              barStyle="light-content"
              />         
          <Body>
            <Title>Header</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name='cash' />
            </Button>
          </Right>
        </Header>
       </StyleProvider>
    );
  }
}