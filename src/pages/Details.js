import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';

import { DetailsBody } from '../components/details/details';
import { TextHeaderDefault } from '../components/common/styles/header-style';

export class Details extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: (<TextHeaderDefault>
                DETALHES
        </TextHeaderDefault>),
            headerRight: (
                <Icon.Button
                    onPress={() => alert('This is a button!')}
                    name="menu-fold"
                    backgroundColor='#003f5c'
                    color="#fb5b5a"
                />
            ),
            headerLeft: (<Icon.Button
                name="arrowleft"
                backgroundColor='#003f5c'
                onPress={() => navigation.goBack()}
                color="#fb5b5a"
            />),
            headerStyle: {
                backgroundColor: '#003f5c',
            }
        }
    };

    render() {

        return <DetailsBody />
    }
}