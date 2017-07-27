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
import SubHeader from './SubHeader';

export default class MainMenu extends Component {
  render() { 
    const styles = this.props.style;
    return (     
        <Container>
            <Content style={{ backgroundColor: 'transparent', padding: 20}}>
            <SubHeader />      
            <Grid style={{ marginTop: 0 }}>
                <Col>
                <Button style={newStyle.leftButton} bordered warning> 
                    <Icon name="filing" style={newStyle.iconButton}/>
                    <Text style={newStyle.textButton}>Primary</Text>
                </Button>
                </Col>
                <Col>
                <Button style={newStyle.rightButton} outline bordered danger>
                    <Icon name="briefcase" style={newStyle.iconButton}/>
                    <Text style={newStyle.textButton}>Primary</Text>
                </Button>
                </Col>                
            </Grid>
            <Grid style={{ marginTop: 0 }}>
                <Col>
                <Button style={newStyle.leftButton} bordered primary> 
                    <Icon name="archive" style={newStyle.iconButton}/>
                    <Text style={newStyle.textButton}>Primary</Text>
                </Button>
                </Col>
                <Col>
                <Button style={newStyle.rightButton} outline bordered success>
                    <Icon name="cash" style={newStyle.iconButton}/>
                    <Text style={newStyle.textButton}>Primary</Text>
                </Button>
                </Col>                
            </Grid>                         
            </Content>
        </Container>
      
    );
  }
};
const newStyle = {
    iconButton: {
        alignItems: 'center', 
        fontSize: 50, 
        textAlign: 'center',
        padding: 20
    },
    textButton: {
        alignItems: 'center', 
        fontSize: 13, 
        textAlign: 'center',
    },
    leftButton: {
            backgroundColor: '#fff',
            borderRadius: 10, 
            borderWidth: 1,       
            height: 150,
            marginTop: 10,
            marginLeft: 0,
            marginBottom: 10,
            width: 150, 
            borderColor: '#eee',
            padding: 20,
            flex: 1, 
            flexDirection: 'column', 
            justifyContent: 'center', 
            shadowColor: '#000000',
            shadowOffset: {
                width: 0,
                height: 3
            },
            shadowRadius: 5,
            shadowOpacity: 1.8,
            elevation: 3,
    },
    rightButton: {
       backgroundColor: '#fff',
            borderRadius: 10, 
            borderWidth: 1,       
            height: 150,
            marginTop: 10,
            marginLeft: 10,
            marginBottom: 10,
            width: 150, 
            borderColor: '#ddd',
            padding: 20,
            flex: 1, 
            flexDirection: 'column', 
            justifyContent: 'center', 
            shadowColor: '#000000',
            shadowOffset: {
                width: 0,
                height: 3
            },
            shadowRadius: 5,
            shadowOpacity: 1.8,
            elevation: 3,
    }
};
