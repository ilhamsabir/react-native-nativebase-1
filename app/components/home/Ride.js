"use strict";

import React, { Component } from 'react';
import { View, Dimensions, Image, StyleSheet, StatusBar, Text } from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, 
         Title, Content, Col, Grid, Card, CardItem, Thumbnail,
         StyleProvider, Form, Item, Input, Label } from 'native-base';
import MapView from 'react-native-maps';
import MenuHeader from './../layouts/MenuHeader';

const screenWidth     = Dimensions.get("window").width
const screenHeight    = Dimensions.get('window').height
const {width, height} = Dimensions.get('window')
const ASPECT_RATIO    = width / height
const LATITUDE_DELTA  =  0.00922
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO

export default class Ride extends Component {
    constructor(props) {
      super(props)
      this.state = {
            initialPosition: {
                latitude: 0,
                longitude: 0,
                latitudeDelta: 0,
                longitudeDelta: 0
            },
            markerPosition: {
                latitude: 0,
                longitude: 0,
            }
        }
    }

    watchID: ?number = null

    componentDidMount() {
        navigator.geolocation.getCurrentPosition((position) => {
            let lat  = position.coords.latitude
            let long = position.coords.longitude

            let initialRegion = {
                latitude:       lat,
                longitude:      long,
                latitudeDelta:  LATITUDE_DELTA,
                longitudeDelta: LONGITUDE_DELTA
            }
            console.log(initialRegion)
            this.setState({ initialPosition: initialRegion })
            this.setState({ markerPosition: initialRegion })

        }, (error) => alert(JSON.stringify(error)),
            {enableHighAccuracy: true, timeout: 20000, maximumAge: 10000})
        
        this.watchID = navigator.geolocation.watchPosition((position) => {
            let lat  = parseFloat(position.coords.latitude)
            let long = parseFloat(position.coords.longitude)

            let lastRegion = {
                latitude:       lat,
                longitude:      long,
                longitudeDelta: LONGITUDE_DELTA,
                latitudeDelta:  LATITUDE_DELTA,
            }

            this.setState({ initialPosition: lastRegion })
            this.setState({ markerPosition: lastRegion })
        })
    }

    componentWillUnmount() {
        navigator.geolocation.clearWatch(this.watchID)
    }

    render() {
        console.log(this.state.lastRegion)
        console.log(this.state.markerPosition)
        return (
        <Container> 
            <Content>
            <Grid style={{ backgroundColor: '#fff' }}>
                <Col>
                <Form>
                        <Item inlineLabel>
                            <Label><Image style={{ width: 64, height: 64 }} source={require('./../img/point-form.png')} /></Label>
                            <Input placeholder='Your location' />
                        </Item>
                        <Item inlineLabel last>
                            <Label><Image style={{ width: 64, height: 64 }} source={require('./../img/point-to.png')} /></Label>
                            <Input placeholder='Your Destination'/>
                        </Item>
                    </Form>
                </Col>           
            </Grid>          
            <Grid style={{  }}>
                <Col>
                   <MapView
                    style={{ flex: 1, width : screenWidth, height: screenHeight - 243 }}
                    region={this.state.initialPosition}>
                        <MapView.Marker
                        coordinate={this.state.markerPosition}
                        onDragEnd={(e) => this.setState({ markerPosition: e.nativeEvent.coordinate })}
                        image={require('./../img/pick-up2.png')}
                        title="Lokasi"
                        description="Hello" />
                    </MapView>
                   
                </Col>
            </Grid>
            </Content>
        

        </Container>
        );
    }
};

//  <MapView
//     style={{ flex: 1, width: ScreenWidth }} //window pake Dimensions
//     region={{
//         latitude: 37.78825,
//         longitude: -122.4324,
//         latitudeDelta: 0.0922,
//         longitudeDelta: 0.0421 
//     }} >
//     <MapView.Marker
//     coordinate={{
//         latitude: 37.78825,
//         longitude: -122.4324,
//     }}
//     title="Lokasi"
//     description="Hello" />
//     </MapView>

// <MapView
// style={{ flex: 1, width: screenWidth, height: screenHeight - 243 }}
// region={this.state.inititalPosition}>
//     <MapView.Marker
//     coordinate={this.state.markerPosition}
//     title="Lokasi"
//     description="Hello" />
// </MapView>