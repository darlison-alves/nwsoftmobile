import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import { Alert } from 'react-native'

import { DetailsBody } from '../components/details/details';
import { TextHeaderDefault } from '../components/common/styles/header-style';
import { api } from '../api/apitask';
import { Loader } from '../components/common/Loader';

export class Details extends React.Component {

    state = {
        task: { endereco: {} },
        loading: false
    }

    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: (<TextHeaderDefault>
                DETALHES
        </TextHeaderDefault>),
            headerRight: (
                <Icon.Button
                    onPress={() => navigation.navigate('EditTask', navigation.state.params)}
                    name="edit"
                    backgroundColor='#003f5c'
                    color="#fb5b5a"
                />
            ),
            headerLeft: (<Icon.Button
                name="arrowleft"
                backgroundColor='#003f5c'
                onPress={() => navigation.push("Home", {})}
                color="#fb5b5a"
            />),
            headerStyle: {
                backgroundColor: '#003f5c',
            }
        }
    };

    componentDidMount() {
        this.setState({ loading: true })
        if (Object.keys(this.props.navigation.state.params).length > 2) {
            this.setState({ task: this.props.navigation.state.params, loading: false })
            return;
        }

        api().get(`/tasks/${this.props.navigation.state.params._id}`)
            .then(res => {
                this.setState({ task: res.data, loading: false })
            }).catch(err => {
                console.log("erre", err.response)
                Alert.alert("Detalhes da tarefa", err.toString())
            })
    }

    render() {
        return (<>
            <Loader visible={this.state.loading} text="Carregando..." />
            <DetailsBody task={this.state.task} />
        </>)
    }
}