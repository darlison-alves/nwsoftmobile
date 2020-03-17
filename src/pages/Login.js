import React from 'react';
import FormLogin from '../components/login/Form';
import { Loader } from '../components/common/Loader'

export class Login extends React.Component {
    state = {
        loading: false
    }

    static navigationOptions = {
        header: null,
    };

    login(data) {
        this.setState({ loading: true })
        setTimeout(() => {
            this.setState({ loading: false })
            this.props.navigation.navigate('Home')
        }, 5000)
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