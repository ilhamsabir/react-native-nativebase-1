import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title, StyleProvider, Text } from 'native-base';
import {
  View, Dimensions, Image, StyleSheet, StatusBar
} from 'react-native';
import getTheme from './../../../native-base-theme/components';

export default class MenuHeader extends Component {
  render() {
    return (
      <StyleProvider style={getTheme()}>
        <Header style={{ backgroundColor: '#039BE5', shadowColor: 'transparent', shadowOpacity: 0, elevation: 0, 
                         borderBottomColor: '#ddd', borderBottomWidth: 0}}>
           <StatusBar
              backgroundColor= '#0277BD'
              barStyle="light-content"
              />         
          <Body style={{ alignItems: 'center'}}>
            <Text>YO-Ride</Text>
          </Body>
        </Header>
       </StyleProvider>
    );
  }
};