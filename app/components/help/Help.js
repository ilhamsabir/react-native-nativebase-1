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
         Grid, List, ListItem, Switch
        } from 'native-base';

export default class Help extends Component {
  render() {
    return (
      <Container>
        <Content>
          <Grid>
            <Col>
                <List>
                  <ListItem icon>
                    <Left>
                      <Icon name="plane" />
                    </Left>
                    <Body>
                      <Text>Airplane Mode</Text>
                    </Body>
                    <Right>
                      <Icon name="arrow-forward" />
                    </Right>
                  </ListItem>
                  <ListItem icon>
                    <Left>
                      <Icon name="wifi" />
                    </Left>
                    <Body>
                      <Text>Wi-Fi</Text>
                    </Body>
                    <Right>
                      <Icon name="arrow-forward" />
                    </Right>
                  </ListItem>
                  <ListItem icon>
                    <Left>
                      <Icon name="bluetooth" />
                    </Left>
                    <Body>
                      <Text>Bluetooth</Text>
                    </Body>
                    <Right>
                      <Icon name="arrow-forward" />
                    </Right>
                  </ListItem>
                </List>
            </Col>
          </Grid>
        </Content>
      </Container>
    );
  }
}