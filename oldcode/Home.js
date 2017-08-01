'use strict';

import React, { Component } from 'react';
import {
  View, Dimensions, Image, StyleSheet
} from 'react-native';
import { Container, 
         Header, 
         Left, 
         Body, 
         Right, 
         Button, 
         Icon, 
         Title, 
         Text, 
         Content, 
         Col, 
         Grid,
         Card, 
         CardItem, 
         Thumbnail,
         StyleProvider
        } from 'native-base';
// import SubHeader from './SubHeader';
import MainMenu from './MainMenu';


// const ScreenHeight = Dimensions.get("window").height;
// const ScreenWidth = Dimensions.get("window").width;
// const imageCarouselWidth = ScreenWidth;
// const customHeight = ScreenHeight - 245;

export default class Home extends Component {
  render() { 
    const styles = this.props.style;
    return (
      <Container style={{ backgroundColor: '#eee', flex: 1, flexDirection: 'column', height: 900 }}>
        <MainMenu />
      </Container>
    );
  }
}