import React from 'react';
import Moment from 'moment';

import { ContainerCard, CardBody, CardTitle, CardDescription, CardDescriptionBody, CardSubDescriptionBody, CardSubDescription, CardFooterText } from "./styles/card-styles";

export function CardTask({ task }) {
    Moment.locale('pt');

    return (
        <ContainerCard >
            <CardBody>
                <CardTitle>{task.titulo}</CardTitle>
                <CardDescriptionBody>
                    <CardDescription>{task.descricao}</CardDescription>
                    <CardSubDescriptionBody>
                        <CardSubDescription>{Moment(task.datahora).format('DD MMM YYYY')} ás {Moment(task.datahora).format('HH:mm:ss')}</CardSubDescription>
                    </CardSubDescriptionBody>
                </CardDescriptionBody>
                {/* <CardFooterText>footerText</CardFooterText> */}
            </CardBody>
        </ContainerCard>
    )
}