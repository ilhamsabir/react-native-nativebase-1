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
import Carousel from 'react-native-snap-carousel';

const horizontalMargin = 20;
const slideWidth = 280;
const sliderWidth = Dimensions.get('window').width;
// const itemWidth = slideWidth + horizontalMargin * 2;
const itemWidth = slideWidth + horizontalMargin * 2;
const itemHeight = 200;
const Styles = StyleSheet.create({
    slide: {
        width: itemWidth,
        // height: itemHeight,
        height: 150,
        paddingTop: 0,
        paddingBottom: 0,
        paddingRight: 0,
        paddingLeft: 0,  
    },
    imgCarousel: {
      // width: ScreenWidth, 
      width: null, 
      height: 135, 
      flex: 1,
      resizeMode: 'contain'
      // resizeMode: 'cover',
    },
});
export default class Slider extends Component {
  render() {
    return (       
        <Content>
            <Carousel
                autoplay={true}
                autoplayInterval={8000}
                autoplayDelay={8000}
                sliderWidth={sliderWidth}
                itemWidth={itemWidth}
                firstItem={1}
                inactiveSlideScale={0.94}
                inactiveSlideOpacity={0.6}
                enableMomentum={true}
                containerCustomStyle={Styles.slider}
                contentContainerCustomStyle={Styles.sliderContainer}
                showsHorizontalScrollIndicator={false}
                snapOnAndroid={true}
                removeClippedSubviews={true}>
                    <View style={Styles.slide}>
                        <Image source={{uri: 'http://img10.jd.id/Indonesia/nHBfsgAAAQAAABwAGD3RYwAEEKk.png' }} 
                                style={Styles.imgCarousel}/>
                        
                    </View>                  
                    <View style={Styles.slide}>
                        <Image source={{uri: 'http://img10.jd.id/Indonesia/nHBfsgAACQAAAAYAGVYXPgAA_RI.jpg' }} 
                                    style={Styles.imgCarousel}/>
                    </View>
                    <View style={Styles.slide}>
                        <Image source={{uri: 'http://img10.jd.id/Indonesia/nHBfsgAAAwAAAB4AFsdmLgABmP0.jpg' }} 
                                style={Styles.imgCarousel}/>
                    </View>
            </Carousel>
        </Content>
    );
  }
}