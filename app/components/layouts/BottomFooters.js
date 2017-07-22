import React, { Component } from 'react';
import { Container, Content, Footer, FooterTab, Button, Icon, Text, StyleProvider } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { Router, Scene } from 'react-native-router-flux';
import {
  View, StyleSheet
} from 'react-native';
import getTheme from './../../../native-base-theme/components';

export default class BottomFooters extends Component {
  render() {
    return (
      <StyleProvider style={getTheme()}>
        <Footer>
          <FooterTab>
            <Button vertical onPress={() => Actions.homes()}>
              <Icon name="apps" />
              <Text>Order</Text>
            </Button>
            <Button vertical >
              <Icon name="list-box" />
              <Text>History</Text>
            </Button>           
            <Button vertical onPress={() => Actions.contact()}>
              <Icon name="settings" />
              <Text>Settings</Text>
            </Button>
          </FooterTab>
        </Footer>
      </StyleProvider>
    );
  }
}