import React, { Component } from 'react';
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
         Grid 
        } from 'native-base';

export default class History extends Component {
  render() {
    return (
      <Container>
        <Content>
          <Grid>
            <Col style={{ backgroundColor: '#fff'}}>
                <Text>Hai List </Text>
            </Col>
          </Grid>
        </Content>
      </Container>
    );
  }
}