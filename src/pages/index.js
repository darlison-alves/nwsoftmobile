import React from 'react'
import { Text } from 'react-native'
import ShimmerPlacerHolder from 'react-native-shimmer-placeholder'

import { IndexContainer, IndexContent } from "./styles/index-style";
import ListTasks from './List-tasks';

export class Index extends React.Component {

    static navigationOptions = {
        header: null,
    };

    render() {


        return (
            <IndexContainer>
                <IndexContent>
                    <ListTasks {...this.props} />
                </IndexContent>
            </IndexContainer >
        )
    }

}