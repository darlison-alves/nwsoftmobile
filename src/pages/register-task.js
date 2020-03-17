import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import axios from 'axios';

import Form from "../components/cadastro/Form";
import { TextHeaderDefault } from '../components/common/styles/header-style';
import { Loader } from '../components/common/Loader';

export class RegisterTask extends React.Component {

    state = {
        endereco: {
            cep: "",
            logradouro: "",
            complemento: "",
            bairro: "",
            localidade: "",
            uf: ""
        },
        visibleModal: false
    }

    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: (<TextHeaderDefault>
                DETALHES
        </TextHeaderDefault>),
            headerStyle: {
                flex: 1,
                justifyContent: 'center',
                backgroundColor: '#003f5c',
                alignItems: 'center',
            },
            headerLeft: (<Icon.Button
                name="arrowleft"
                backgroundColor='#003f5c'
                onPress={() => navigation.goBack()}
                color="#fb5b5a"
            />)
        }
    }

    setEndereco(cep, cb) {
        this.setState({ visibleModal: true })
        axios.get(`https://viacep.com.br/ws/${cep}/json/`)
            .then(res => {
                console.log('data', res.data)
                cb(res.data)
                this.setState({ visibleModal: false })
            }).catch(err => {
                this.setState({ visibleModal: false })
            })
    }

    render() {
        return (
            <>
                <Loader visible={this.state.visibleModal} text={"Buscando endereço pelo CEP..."} />
                <Form setEndereco={this.setEndereco.bind(this)} />

            </>
        )
    }
}

