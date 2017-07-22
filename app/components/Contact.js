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

export default class Contact extends Component {
  render() {
    return (
      <Container>
        <Content>
          <Grid>
            <Col style={{ backgroundColor: '#fff', height: 900 }}>
                <Text>Hai Setting </Text>
            </Col>
          </Grid>
        </Content>
      </Container>
    );
  }
}