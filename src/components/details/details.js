import React from 'react';
import { ImageBackground, Text } from 'react-native'
import Constants from 'expo-constants'
import { ContainerDetails, HeaderDetail, HeaderDetailCard, HeaderDetailCardText, HeaderDetailCardTextSub, HeaderDetailText, ContainerTextHour, TextHour, Description } from './styles/details-style';

import url from '../../assets/images/bg5.png'
import { Colors } from '../../defaults/constants';

export function Datails() {
    return (
        <ImageBackground
            style={{ flex: 1, width: '100%', height: '100%', alignItems: 'center', marginTop: `${Constants.statusBarHeight}px` }}
            source={url}
        >
            <Text style={{
                position: 'relative',
                fontSize: 18,
                marginTop: '10%',
                color: Colors.white,
                fontWeight: 'bold'
            }} >DETALHES</Text>
            <ContainerDetails>
                <HeaderDetail>
                    <HeaderDetailCard>
                        <HeaderDetailCardText>25</HeaderDetailCardText>
                        <HeaderDetailCardTextSub>JAN</HeaderDetailCardTextSub>
                    </HeaderDetailCard>
                    <HeaderDetailText>TITLE</HeaderDetailText>
                </HeaderDetail>
                <Text>14:04</Text>
                <Description>
                    DESCRICAO DESCRICAODESCRICAO DESCRICAODESCRICAODESCRICAO DESCRICAODESCRICAO
                    DESCRICAODESCRICAO
                </Description>
            </ContainerDetails>

        </ImageBackground>
    )
}