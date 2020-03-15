import React from 'react';
import { KeyboardAvoidingView, ScrollView, ImageBackground, Image } from 'react-native'


import { LoginContainer, InputView, InputText, TouchableOpacity, TextBtnLogin, Logo, LogoSub } from './styles/login-styles';
export function Form() {
    return (
        <LoginContainer>
            <KeyboardAvoidingView style={{ width: '100%', alignContent: 'center', alignItems: 'center' }} behavior="padding" >
                <Logo>NW<LogoSub>Soft</LogoSub></Logo>
                <InputView>
                    <InputText placeholder="Email..." />
                </InputView>
                <InputView >
                    <InputText placeholder="Password..." />
                </InputView>
            </KeyboardAvoidingView>
            <TouchableOpacity>
                <TextBtnLogin>LOGIN</TextBtnLogin>
            </TouchableOpacity>
        </LoginContainer>

    )
}