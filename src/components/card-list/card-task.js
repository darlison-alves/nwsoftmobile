import React from 'react';

import { ContainerCard, CardBody, CardTitle, CardDescription, CardDescriptionBody, CardSubDescriptionBody, CardSubDescription, CardFooterText } from "./styles/card-styles";

export function CardTask() {
    return (
        <ContainerCard>
            <CardBody>
                <CardTitle>Title</CardTitle>
                <CardDescriptionBody>
                    <CardDescription>Descrição</CardDescription>
                    <CardSubDescriptionBody>
                        <CardSubDescription>Sub descripition</CardSubDescription>
                    </CardSubDescriptionBody>
                </CardDescriptionBody>
                <CardFooterText>footerText</CardFooterText>
            </CardBody>
        </ContainerCard>
    )
}