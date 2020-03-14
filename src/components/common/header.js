import React from 'react-native';
import { Animated, Text } from 'react-native'
import { TextHeaderDefault, StyleHeader } from './styles/header-style';

export function Header() {
    return (
        <Animated.View style={[StyleHeader.header]} >
            <TextHeaderDefault> Collapsible Expandable Header </TextHeaderDefault>
        </Animated.View>
    )
}