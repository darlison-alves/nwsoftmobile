import React from 'react';
import { Alert } from 'react-native'

import SingUpForm from '../components/login/SingUp'
import { apiAuth } from '../api/apitask';
import { Loader } from '../components/common/Loader';

export class SingUp extends React.Component {

    state = {
        loading: false
    }

    static navigationOptions = {
        header: null
    }

    login = (data) => {
        this.setState({ loading: true })
        apiAuth().post('/singUp', data)
            .then(res => {
                this.setState({ loading: false })
                this.props.navigation.navigate("Login")
                Alert.alert("Usuário cadastrado")
            }).catch(err => {
                Alert.alert("Cadastro", err.toString())
            })
    }

    render() {
        return (<>
            <Loader visible={this.state.loading} text="cadastrando..." />
            <SingUpForm login={this.login.bind(this)} titulo="CADASTRO" subtitulo="" textbtn="CADASTRAR" />
        </>
        )
    }

}
