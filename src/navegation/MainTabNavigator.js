import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Index } from '../pages';
import { Datails } from '../components/details/details';
import { Login } from '../pages/Login';

const config = Platform.select({
    web: { headerMode: 'none' },
    default: {}
})

const HomeStack = createStackNavigator(
    {
        Home: Index,
        Datails: Datails,
        Login: Login
    },
    { ...config, initialRouteName: 'Login' }
)

HomeStack.path = '';

const tabNavigator = createAppContainer(HomeStack);

tabNavigator.path = '';

export default tabNavigator;