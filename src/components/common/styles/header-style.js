import styled from 'styled-components';
import { Platform, StyleSheet } from 'react-native';

import { Header_Maximum_Height } from '../../../defaults/constants';

export const StyleHeader = StyleSheet.create({
    header: {
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        left: 0,
        right: 0,
        top: Platform.OS == 'ios' ? 20 : 0,

    },
    backgroundImage: {
        flex: 1,
        position: 'absolute',
        top: Platform.OS == 'ios' ? 20 : 0,
        left: 0,
        right: 0,
        width: '100%',
        height: Header_Maximum_Height,
        resizeMode: 'cover',
    }
})

export const TextHeaderDefault = styled.Text`
    fontWeight:bold;
    fontSize:25px;
    color: #fb5b5a;
`
