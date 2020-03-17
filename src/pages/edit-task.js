import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import axios from 'axios';
import { Alert } from 'react-native'

import EditForm from '../components/cadastro/EditForm'
import { TextHeaderDefault } from '../components/common/styles/header-style';
import { Loader } from '../components/common/Loader';
import { BACKEND } from '../defaults/url_backend'

export class EditTask extends React.Component {

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
                Editar Tarefa
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

    getEndereco(cep, cb) {
        this.setState({ visibleModal: true, text: "Buscando endereço pelo CEP..." })
        axios.get(`https://viacep.com.br/ws/${cep}/json/`)
            .then(res => {
                cb(res.data)
                this.setState({ visibleModal: false })
            }).catch(err => {
                Alert.alert("Erro ao buscar endereço", err.toString())
                this.setState({ visibleModal: false })
            })
    }

    register = (id, data) => {
        this.setState({ visibleModal: true, text: "Salvando..." })
        axios.patch(`${BACKEND}/tasks/${id}`, data)
            .then(res => {
                this.setState({ visibleModal: false, text: "Salvando..." })
                Alert.alert("Regista tarefa", "Salvo com sucesso")
                this.props.navigation.push("Details", { _id: id })

            }).catch(err => {
                this.setState({ visibleModal: false })
                Alert.alert("Regista tarefa", err.toString())
            })
    }

    render() {

        return (
            <>
                <Loader visible={this.state.visibleModal} text={this.state.text} />
                <EditForm ìdTask={this.props.navigation.state.params._id} newvalues={this.props.navigation.state.params} setEndereco={this.getEndereco.bind(this)} register={this.register} />
            </>
        )
    }
}

