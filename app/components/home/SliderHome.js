import React, { Component } from 'react';
import {
  View, Dimensions, Image, StyleSheet
} from 'react-native';
import Carousel from 'react-native-snap-carousel';

const horizontalMargin = 20;
const slideWidth = 280;
const sliderWidth = Dimensions.get('window').width;
const itemWidth = slideWidth + horizontalMargin * 2;
const itemHeight = 200;
const Styles = StyleSheet.create({
    slide: {
        width: itemWidth,
        // height: itemHeight,
        height: 110,
        paddingTop: 0,
        paddingBottom: 0,
        paddingRight: 0,
        paddingLeft: 0,  
    },
    imgCarousel: {
      // width: ScreenWidth, 
      width: null, 
      height: 110, 
      flex: 1,
      resizeMode: 'contain'
      // resizeMode: 'cover',
    },
});
export default class SliderHome extends Component {
  render() {
    return (
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
                    <Image source={{uri: 'https://ecs7.tokopedia.net/img/banner/2017/7/10/16723082/16723082_842afb0c-ad0e-47c9-b430-15a6f5c9e995.jpg' }} 
                            style={Styles.imgCarousel}/>
                    
                </View>                  
                <View style={Styles.slide}>
                    <Image source={{uri: 'https://ecs7.tokopedia.net/img/banner/2017/7/14/5253715/5253715_e882b89a-27a4-4932-b27e-abfa0e3e891a.jpg' }} 
                                style={Styles.imgCarousel}/>
                </View>
                <View style={Styles.slide}>
                    <Image source={{uri: 'https://ecs7.tokopedia.net/img/banner/2017/7/13/16723082/16723082_6f7411ef-8fce-4960-9e6d-d071de28e845.jpg' }} 
                            style={Styles.imgCarousel}/>
                </View>
        </Carousel>
    );
  }
}