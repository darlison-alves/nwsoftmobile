import React from 'react';
import Axios from 'axios';
import { AsyncStorage, Alert } from 'react-native'

import FormLogin from '../components/login/Form';
import { Loader } from '../components/common/Loader'
import { BACKEND } from '../defaults/url_backend';
import { apiAuth } from '../api/apitask';

export class Login extends React.Component {
    state = {
        loading: false
    }

    static navigationOptions = {
        header: null,
    };

    login(data) {
        this.setState({ loading: true })
        apiAuth().post(`/singIn`, data)
            .then(async res => {
                await AsyncStorage.setItem("@jwt", res.data.token)
                this.setState({ loading: false })
                this.props.navigation.navigate('Home')
            }).catch(err => {
                console.log("err", err.response)
                this.setState({ loading: false })
                Alert.alert('Login', 'email ou senha invalido!')
            })
    }

    render() {
        return (
            <>
                <Loader visible={this.state.loading} text="logando..." />
                <FormLogin login={this.login.bind(this)} />
            </>
        )
    }

}