import React from 'react';
import { Animated } from 'react-native'
const Header_Maximun_Height = 200;
const Header_Minimun_Height = 50;

class List extends React.Component {
    constructor () {
        super()
        this.AnimatedHeaderValue = new Animated.Value(0);
    }

    render() {
        const AnimateHeaderBackgroudColor = this.AnimatedHeaderValue.interpolate(
            {
                inputRange: [0, (Header_Maximun_Height - Header_Minimun_Height)],
                outputRange: ['#009688', '#00BCD4'],
                extrapolate: 'clamp'
            }
        )

        const AnimateHeaderHeight = this.AnimatedHeaderValue.interpolate(
            {
                inputRange: [0, (Header_Maximun_Height - Header_Minimun_Height)],
                outputRange: [Header_Maximun_Height, Header_Minimun_Height],
                extrapolate: 'clamp'
            }
        )
    }
}