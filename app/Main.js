import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Text } from 'native-base';
import { Router, Scene } from 'react-native-router-flux';

import AppHeaders from './components/layouts/AppHeaders';
import Footers from './components/layouts/BottomFooters';
import Home from './components/Home';
import Contact from './components/Contact';

export default class Main extends Component {
  render() {
    return (
     <Container>        
        <AppHeaders />
            <Router>
                <Scene key="root">
                    <Scene 
                        key="homes"
                        component={Home}
                        initial
                        hideNavBar={true}
                    />
                    <Scene
                        key="contact"
                        component={Contact}
                        hideNavBar={true}
                    />
                </Scene>
            </Router>
        <Footers />
      </Container>
    );
  }
}