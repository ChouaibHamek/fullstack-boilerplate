import React from 'react';

import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import HomeScreen from './src/screens/HomeScreen';
import Header from './src/components/Header';

const navigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
    header: null
  },
}, {
  initialRouteName: "Home",
  defaultNavigationOptions: {
    headerMode: 'none',
    headerTitle: <Header />,
    headerStyle: { height: 200, borderBottomWidth: 8, borderBottomColor: '#151F6D' }
  }
});

export default createAppContainer(navigator);