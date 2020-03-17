import React from 'react';
import { Modal, Text, ActivityIndicator } from 'react-native'
import { Wrapper, WrapperText } from './styles/loader-style';
import { Colors } from '../../defaults/constants';

export function Loader({ visible = false, text = "" }) {
    return (
        <Modal animationType={'fade'} visible={visible} transparent={true} >
            <Wrapper>
                <ActivityIndicator size={"large"} color={Colors.white} />
                <WrapperText> {text}</WrapperText>
            </Wrapper>
        </Modal>)
}