import React from 'react';
import { ScrollView, Text } from 'react-native';
import Moment from 'moment'
import Icon from 'react-native-vector-icons/AntDesign';

import { ContainerDetails, HeaderDetail, HeaderDetailCard, HeaderDetailCardText, HeaderDetailCardTextSub, HeaderDetailText, ContainerTextHour, TextHour, Description, TextViewTitle, HeaderDetailTextSub, DescriptionBody } from './styles/details-style';

export function DetailsBody({ task }) {
    Moment.locale('pt');
    const endereco = task.endereco

    return (
        <ContainerDetails>
            <HeaderDetail>
                <HeaderDetailCard>
                    <HeaderDetailCardText>{Moment(task.datahora).format('DD')}</HeaderDetailCardText>
                    <HeaderDetailCardTextSub>{Moment(task.datahora).format('MMM')}</HeaderDetailCardTextSub>
                </HeaderDetailCard>

                <HeaderDetailText>
                    {task.titulo}
                </HeaderDetailText>
                <HeaderDetailTextSub ><Icon name="clockcircleo" /> {Moment(task.datahora).format('HH:mm')}</HeaderDetailTextSub>
            </HeaderDetail>

            <DescriptionBody>
                <ScrollView style={{ maxHeight: '70%', marginTop: '30%' }}>
                    <Description>
                        {task.descricao}
                    </Description>
                </ScrollView>
                <Text style={{ flex: 1, position: 'relative', top: 0, fontWeight: 'bold', paddingTop: 10 }} >ENDEREÇO:</Text>
                <Text style={{ fontSize: 18, paddingLeft: 40, flex: 1, position: 'relative', top: 0, fontWeight: 'bold', paddingTop: 10 }} >
                    Rua / AV: {endereco.logradouro}, {endereco.numero} - {endereco.bairro} , {endereco.localidade} - {endereco.cep} </Text>

            </DescriptionBody>

        </ContainerDetails>
    )
}