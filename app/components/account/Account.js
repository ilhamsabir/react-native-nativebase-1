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

export default class Account extends Component {
  render() {
    return (
      <Container>
        <Content>
          <Grid>
            <Col>
                <Text>Hai Setting </Text>
            </Col>
          </Grid>
        </Content>
      </Container>
    );
  }
}