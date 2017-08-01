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
import MainMenu from './MainMenu';
const ScreenWidth = Dimensions.get("window").width;
export default class Home extends Component {
  render() { 
    const styles = this.props.style;
    return (
      <Container style={{ backgroundColor: '#f5f5f5' }}>
        <Content style={{ padding: 15}}>
          <Grid>
            <Col style={{height: 65, marginTop: 15, borderColor: '#eee', borderWidth: 1, backgroundColor: '#fff'}}>
              <Card style={{  elevation: 0}}>
                <CardItem>
                    <Icon active name="logo-googleplus" />
                    <Text>Google Plus</Text>
                    <Right>
                      <Icon name="arrow-forward" />
                    </Right>
                </CardItem>
              </Card> 
            </Col>
          </Grid>

          <Grid>
            <Col style={{height: 65, marginTop: 15, borderColor: '#eee', borderWidth: 1, backgroundColor: '#fff'}}>
              <Card style={{  elevation: 0}}>
                <CardItem>
                    <Icon active name="logo-googleplus" />
                    <Text>Google Plus</Text>
                    <Right>
                      <Icon name="arrow-forward" />
                    </Right>
                </CardItem>
              </Card> 
            </Col>
          </Grid>

          <Grid>
            <Col style={{height: 65, marginTop: 15, borderColor: '#eee', borderWidth: 1, backgroundColor: '#fff'}}>
              <Card style={{  elevation: 0}}>
                <CardItem>
                    <Icon active name="logo-googleplus" />
                    <Text>Google Plus</Text>
                    <Right>
                      <Icon name="arrow-forward" />
                    </Right>
                </CardItem>
              </Card> 
            </Col>
          </Grid>

          <Grid>
            <Col style={{height: 65, marginTop: 15, borderColor: '#eee', borderWidth: 1, backgroundColor: '#fff'}}>
              <Card style={{  elevation: 0}}>
                <CardItem>
                    <Icon active name="logo-googleplus" />
                    <Text>Google Plus</Text>
                    <Right>
                      <Icon name="arrow-forward" />
                    </Right>
                </CardItem>
              </Card> 
            </Col>
          </Grid> 
        </Content>
      </Container>
    );
  }
}

// style={{ backgroundColor: '#eee', flex: 1, flexDirection: 'column', height: 900 }}