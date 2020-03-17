import React from 'react';
import { Animated } from 'react-native'

import { TextHeaderDefault, StyleHeader } from './styles/header-style';

export function Header({ text = "LISTA TAREFAS", imageOpacity, imageTranslate, AnimateHeaderHeight, AnimateHeaderBackgroundColor }) {

    return (
        <Animated.View
            style={[
                StyleHeader.header,
                {
                    height: AnimateHeaderHeight,
                    backgroundColor: AnimateHeaderBackgroundColor,
                },
            ]}>
            {/* <Animated.Image style={[
                StyleHeader.backgroundImage,
                { opacity: imageOpacity, transform: [{ translateY: imageTranslate }] }
            ]} source={nwbg} /> */}
            <TextHeaderDefault >
                {text}
            </TextHeaderDefault>


        </Animated.View>
    )
}