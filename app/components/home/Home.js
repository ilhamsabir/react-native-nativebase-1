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
         StyleProvider,
         List,
         ListItem,
         Switch
        } from 'native-base';


// import MainMenu from './MainMenu';
import Slider from './Slider';


const ScreenWidth = Dimensions.get("window").width;

export default class Home extends Component {

  _goToRideMenu = () => {
      this.props.navigation.navigate('Ride');
  }

  _goToCarMenu = () => {
      // this.props.navigation.navigate('Ride');
  }

  _goToSendMenu = () => {
      // this.props.navigation.navigate('Ride');
  }

  _goToBoxMenu = () => {
      // this.props.navigation.navigate('Ride');
  }

  _goToFoodMenu = () => {
      // this.props.navigation.navigate('Ride');
  }

  _goToMartMenu = () => {
      // this.props.navigation.navigate('Ride');
  }

  render() {    
    return (
      <Container style={{ backgroundColor: '#fff' }}>
        <Content>
          <Grid>
            <Col>
              <Slider />
            </Col>           
          </Grid>          
          <Grid style={{ marginTop: 20 }}>
            <Col>
              <Content>
                <Grid>
                    <Col style={newStyle.colMenu} onPress={this._goToRideMenu}>
                        <Image style={newStyle.icon} source={require('./../img/ride.png')} />
                        <Text style={newStyle.textButton}>Ride</Text>
                    </Col>
                    <Col style={[newStyle.colMenu, newStyle.colMenuBorderLeft]} onPress={this._goToCarMenu}>  
                        <Image style={newStyle.icon} source={require('./../img/car.png')} />
                        <Text style={newStyle.textButton}>Car</Text>
                    </Col>
                    <Col style={[newStyle.colMenu, newStyle.colMenuBorderLeft]} onPress={this._goToSendMenu}>                    
                        <Image style={newStyle.icon} source={require('./../img/send.png')} />
                        <Text style={newStyle.textButton}>Send</Text>
                    </Col>
                </Grid>    
                <Grid style={newStyle.colMenuBorderTop}>
                    <Col style={[newStyle.colMenu]} onPress={this._goToBoxMenu}>  
                        <Image style={newStyle.icon} source={require('./../img/box.png')} />
                        <Text style={newStyle.textButton}>Box</Text>
                    </Col>
                    <Col style={[newStyle.colMenu, newStyle.colMenuBorderLeft]} onPress={this._goToFoodMenu}>  
                        <Image style={newStyle.icon} source={require('./../img/food.png')} />
                        <Text style={newStyle.textButton}>Food</Text>
                    </Col>
                    <Col style={[newStyle.colMenu, newStyle.colMenuBorderLeft]} onPress={this._goToMartMenu}>                    
                        <Image style={newStyle.icon} source={require('./../img/mart.png')} />
                        <Text style={newStyle.textButton}>Mart</Text>
                    </Col>
                </Grid>
            </Content>
            </Col>
          </Grid>
        </Content>
      </Container>
    );
  }
};

const newStyle = {
    colMenu: {
      backgroundColor: '#fff',
      padding: 15,      
      alignItems: 'center',
      width: 120
    },
    colMenuBorderTop: {
      borderTopColor: '#eee',
      borderTopWidth: 1,
    },
    colMenuBorderLeft: {
      borderLeftColor: '#eee',
      borderLeftWidth: 1,
    },
    textButton: {
        alignItems: 'center', 
        fontSize: 13, 
        textAlign: 'center',
    },
    icon: {
        width: 32,
        height: 32,
    },
};
//  navigation={this.props.navigation}