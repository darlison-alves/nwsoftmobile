import styled from 'styled-components';
import { Platform } from 'react-native';
import Constants from 'expo-constants'

export const ContainerHeader = styled.View`
    flex: 1;
    padding-top: ${(Platform.OS == 'ios' ? 20 : 0)};
    margin-top: ${Constants.statusBarHeight};
    backgroundColor: #F5FCFF;
`

export const TextHeaderBody = styled.Text`
    text-align: center;
    color: #000;
    font-size: 18px;
    margin: 5px;
    padding: 7px;
`