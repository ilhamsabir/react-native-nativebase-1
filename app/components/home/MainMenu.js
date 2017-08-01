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

export default class MainMenu extends Component {

   _goToRideMenu = () => {
        console.log(this.props.navigation);
    //    this.props.navigation.navigate("Ride");
    }

    render() {
        return (
            <Content>
                <Grid>
                    <Col style={{ padding: 15, alignItems: 'center', width: 120}} onPress={this._goToRideMenu}>
                        <Image style={newStyle.icon} source={require('./../img/ride.png')} />
                        <Text style={newStyle.textButton}>Ride</Text>
                    </Col>
                    <Col style={[newStyle.colMenu, newStyle.colMenuBorderLeft]}>  
                        <Image style={newStyle.icon} source={require('./../img/car.png')} />
                        <Text style={newStyle.textButton}>Car</Text>
                    </Col>
                        <Col style={[newStyle.colMenu, newStyle.colMenuBorderLeft]}>                    
                        <Image style={newStyle.icon} source={require('./../img/send.png')} />
                        <Text style={newStyle.textButton}>Send</Text>
                    </Col>
                </Grid>    
                <Grid style={newStyle.colMenuBorderTop}>
                    <Col style={[newStyle.colMenu]}>  
                        <Image style={newStyle.icon} source={require('./../img/box.png')} />
                        <Text style={newStyle.textButton}>Box</Text>
                    </Col>
                    <Col style={[newStyle.colMenu, newStyle.colMenuBorderLeft]}>  
                        <Image style={newStyle.icon} source={require('./../img/food.png')} />
                        <Text style={newStyle.textButton}>Food</Text>
                    </Col>
                        <Col style={[newStyle.colMenu, newStyle.colMenuBorderLeft]}>                    
                        <Image style={newStyle.icon} source={require('./../img/mart.png')} />
                        <Text style={newStyle.textButton}>Mart</Text>
                    </Col>
                </Grid>
            </Content>
        );
    }
};


const newStyle = {
    colMenu: {
      backgroundColor: '#fff',
      padding: 15,      
      alignItems: 'center'
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