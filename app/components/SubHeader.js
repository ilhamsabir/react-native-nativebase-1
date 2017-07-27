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

export default class SubHeader extends Component {
  render() { 
    return (       
      <Grid style={{ backgroundColor: '#fff'}}>
        <Col style={{  justifyContent: 'center', alignItems: 'center', height: 100}}>
          <Image style={{width: 100, height: 100, flex: 1}} source={require('./img/laundry.png')} />
        </Col>                
      </Grid>   
    );
  }
}