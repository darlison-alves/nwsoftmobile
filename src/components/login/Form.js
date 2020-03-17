import React from 'react';
import { KeyboardAvoidingView } from 'react-native'
import { withFormik } from 'formik';
import * as yup from 'yup';

import { LoginContainer, InputView, InputText, TouchableOpacity, TextBtnLogin, Logo, LogoSub } from './styles/login-styles';
import { defaullTextError } from '../../defaults/constants';
import { FormTextInputError } from '../cadastro/styles/form-style';

export function Form({ setFieldValue, handleSubmit, errors }) {
    return (
        <LoginContainer>
            <KeyboardAvoidingView style={{ width: '100%', alignContent: 'center', alignItems: 'center' }} behavior="padding" >
                <Logo>NW<LogoSub>Soft</LogoSub></Logo>
                <FormTextInputError>{errors.email}</FormTextInputError>
                <InputView>
                    <InputText placeholder="Email..." onChangeText={text => setFieldValue('email', text)} />
                </InputView>

                <FormTextInputError>{errors.password}</FormTextInputError>
                <InputView >
                    <InputText secureTextEntry={true} placeholder="Password..." onChangeText={text => setFieldValue('password', text)} />
                </InputView>
            </KeyboardAvoidingView>
            <TouchableOpacity onPress={handleSubmit}>
                <TextBtnLogin>LOGIN</TextBtnLogin>
            </TouchableOpacity>
        </LoginContainer>
    )
}

export default withFormik({
    mapPropsToValues: () => ({ email: '', password: '' }),
    validationSchema: yup.object().shape({
        email: yup.string().email("email invalido.").required(defaullTextError),
        password: yup.string().required(defaullTextError)
    }),
    handleSubmit: (values, formikprops) => {
        formikprops.props.login(values)
    }

})(Form)