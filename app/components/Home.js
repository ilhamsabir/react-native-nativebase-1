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
import SliderHome from './home/SliderHome';


const ScreenHeight = Dimensions.get("window").height;
const ScreenWidth = Dimensions.get("window").width;
const imageCarouselWidth = ScreenWidth;
const customHeight = ScreenHeight - 245;

export default class Home extends Component {
  render() { 
    const styles = this.props.style;
    return (
     <Container style={{ backgroundColor: '#fff' }}>
        <Content>
          <Grid>
            <Col style={{ backgroundColor: '#80D8FF', height: 150, marginBottom: 10 }}>
              
            </Col>
          </Grid>       
          <Grid>
            <Col style={{ backgroundColor: '#fff', height: 80}}>
                <Content>
                  <Grid>
                    <Col style={{ padding: 30, borderLeftColor: '#ddd', borderLeftWidth: 2 }}>
                      <Text>HelloWO</Text>
                    </Col>
                    <Col style={{ padding: 30 }}>
                       <Text>HelloWO</Text>
                    </Col>
                    <Col style={{ padding: 30 }}>
                       <Text>HelloWO</Text>
                    </Col>
                  </Grid>
                </Content>
            </Col>
          </Grid>
          <Grid>
            <Col style={{ backgroundColor: '#fff', height: 80}}>
                <Content>
                  <Grid>
                    <Col>
                      <Button full light bordered  style={{ height: 195 }}>
                        <Text>Default Small</Text>
                      </Button>
                    </Col>
                    <Col>
                       <Button full light bordered  style={{ height: 195 }}>
                        <Text>Default Small</Text>
                      </Button>
                    </Col>
                    <Col>
                       <Button full light bordered  style={{ height: 195 }}>
                        <Text>Default Small</Text>
                      </Button>
                    </Col>
                  </Grid>
                </Content>
            </Col>
          </Grid>
        </Content>
      </Container>
    );
  }
}