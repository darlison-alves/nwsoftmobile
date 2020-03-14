import styled from 'styled-components';
import { Platform, StyleSheet } from 'react-native';

export const StyleHeader = StyleSheet.create({
    header: {
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        left: 0,
        right: 0,
        top: (Platform.OS == 'ios' ? 20 : 0)
    }
})

export const TextHeaderDefault = styled.Text`
    color: #fff;
    fontSize: 18;
    textAlign: center;
`