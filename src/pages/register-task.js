import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import axios from 'axios';
import { Alert } from 'react-native'

import { api } from '../api/apitask'
import Form from "../components/cadastro/Form";
import { TextHeaderDefault } from '../components/common/styles/header-style';
import { Loader } from '../components/common/Loader';
import { BACKEND } from '../defaults/url_backend'

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
        text: "",
        visibleModal: false
    }

    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: (<TextHeaderDefault>
                Registrar Tarefa
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
        this.setState({ visibleModal: true, text: "Buscando endereço pelo CEP..." })
        axios.get(`https://viacep.com.br/ws/${cep}/json/`)
            .then(res => {
                console.log('data', res.data)
                cb(res.data)
                this.setState({ visibleModal: false })
            }).catch(err => {
                Alert.alert("Erro ao buscar endereço", err.toString())
                this.setState({ visibleModal: false })
            })
    }

    register = (data) => {
        this.setState({ visibleModal: true, text: "Salvando..." })
        api().post(`${BACKEND}/tasks`, data)
            .then(res => {
                this.setState({ visibleModal: false, text: "Salvando..." })
                this.props.navigation.push('Home')
                Alert.alert("Regista tarefa", "Salvo com sucesso")
            }).catch(err => {
                this.setState({ visibleModal: false })
                Alert.alert("Regista tarefa", "Não foi possivel buscar endereço.")
            })

    }

    render() {
        return (
            <>
                <Loader visible={this.state.visibleModal} text={this.state.text} />
                <Form setEndereco={this.setEndereco.bind(this)} register={this.register} />
            </>
        )
    }
}

