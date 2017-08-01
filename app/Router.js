import React, { Component } from 'react';
import {
  View, Dimensions, Image, StyleSheet
} from 'react-native';
import { Container, Content, Footer, FooterTab, Button, Icon, Text, StyleProvider } from 'native-base';
import { TabNavigator, StackNavigator } from 'react-navigation';

import Home from './components/home/Home';
import Account from './components/account/Account';
import History from './components/history/History';
import Help from './components/help/Help';

// home menu
import Ride from './components/home/Ride';

export const HomeStack = StackNavigator({
    Home: {
        screen: Home,      
        navigationOptions: {
            header: null,
        }
    },
    Ride: {
        screen: Ride,
        navigationOptions: {
            title: "Ride",
            headerStyle: {
                backgroundColor: '#039BE5'
            },
            headerTitleStyle: {
                color: '#fff'
            },
            headerBackTitleStyle: {
                color: '#fff'
            },
            tabBarVisible: false
        }
    }
});


export  const Tabs = TabNavigator({
    Home: {
        screen: HomeStack,
        navigationOptions:{
              tabBarIcon: ({ tintColor }) => ( <Image style={[styles.icon, {tintColor: tintColor}]} source={require('./components/img/home.png')} /> ),                                      
        }
       
    },
    History: {
        screen: History,
        navigationOptions:{
            tabBarIcon: ({ tintColor }) => ( <Image style={[styles.icon, {tintColor: tintColor}]} source={require('./components/img/list.png')} /> ),                                 
        }
    },
    Help: {
        screen: Help,
        navigationOptions:{
            tabBarIcon: ({ tintColor }) => ( <Image style={[styles.icon, {tintColor: tintColor}]} source={require('./components/img/help.png')} /> ),                                 
        }
    },
    Account: {
        screen: Account,
        navigationOptions:{
            tabBarIcon: ({ tintColor }) => ( <Image style={[styles.icon, {tintColor: tintColor}]} source={require('./components/img/user.png')} /> ),                                 
        }
    },
}, {
    tabBarOptions: {
        showLabel: true,
        activeTintColor: '#039BE5',
        inactiveTintColor: '#b1b1b1',
        activeBackgroundTintColor: 'yellow',
        showIcon: true,
        indicatorStyle: {
            backgroundColor: '#fff',
            borderBottomColor: '#fff'
        },
        labelStyle: {
            fontSize: 9,
            fontWeight: 'bold',
            marginBottom: 10
        },
        style: {
            backgroundColor: '#fff',
            height: 55,
            borderBottomWidth: 1,
            borderBottomColor: '#ddd',
        },
    },
    // tabBarPosition: 'top',
});

const styles = StyleSheet.create({
  icon: {
    width: 20,
    height: 20,
  },
});