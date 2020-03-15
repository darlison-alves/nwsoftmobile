import React from 'react';
import { Form } from '../components/login/Form';

export class Login extends React.Component {
    static navigationOptions = {
        header: null,
    };
    render() {
        return <Form />
    }

}