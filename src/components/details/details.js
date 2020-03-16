import React from 'react';
import { View, ScrollView, Text } from 'react-native';

import { ContainerDetails, HeaderDetail, HeaderDetailCard, HeaderDetailCardText, HeaderDetailCardTextSub, HeaderDetailText, ContainerTextHour, TextHour, Description, TextViewTitle, HeaderDetailTextSub, DescriptionBody } from './styles/details-style';

export function DetailsBody() {
    return (
        <ContainerDetails>
            <HeaderDetail>
                <HeaderDetailCard>
                    <HeaderDetailCardText>25</HeaderDetailCardText>
                    <HeaderDetailCardTextSub>JAN</HeaderDetailCardTextSub>
                </HeaderDetailCard>

                <HeaderDetailText>
                    TITLE
                </HeaderDetailText>
                <HeaderDetailTextSub >14:04</HeaderDetailTextSub>
            </HeaderDetail>

            <DescriptionBody>
                <ScrollView style={{ maxHeight: '70%', marginTop: '30%' }}>
                    <Description>
                        DESCRICAO DESCRICAODESCRICAO DESCRICAODESCRICAODESCRICAO DESCRICAODESCRICAO
                        DESCRICAODESCRICAO
                        DESCRICAO DESCRICAODESCRICAO DESCRICAODESCRICAODESCRICAO DESCRICAODESCRICAO
                    </Description>
                </ScrollView>
                <Text style={{ flex: 1, position: 'relative', top: 0, fontWeight: 'bold', paddingTop: 10 }} >ENDEREÇO:</Text>
                <Text style={{ fontSize: 18, paddingLeft: 40, flex: 1, position: 'relative', top: 0, fontWeight: 'bold', paddingTop: 10 }} >
                    Rua / AV: São Vicente de Paulo, 88 - Araturi , CAUCAIA - 60340-310</Text>

            </DescriptionBody>

        </ContainerDetails>
    )
}