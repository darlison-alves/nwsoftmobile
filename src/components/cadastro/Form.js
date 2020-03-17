import React from 'react';
import { withFormik } from 'formik';
import * as yup from 'yup';
import { ScrollView, KeyboardAvoidingView, Platform, TextInput } from 'react-native';
import { FormContainer, FormTextInput, InputAreaView, TextBtnCadastro, Title, FormTextInputError } from './styles/form-style';
import { InputView, TouchableOpacity } from '../login/styles/login-styles';
import { DatePickerCustom } from './date-picker';
import { defaullTextError } from '../../defaults/constants';

function FormTask({ setFieldValue, handleSubmit, errors, values, setEndereco, ...props }) {

    const cb = (endereco) => {
        setFieldValue('endereco.logradouro', endereco.logradouro)
        setFieldValue('endereco.complemento', endereco.complemento)
        setFieldValue('endereco.bairro', endereco.bairro)
        setFieldValue('endereco.localidade', endereco.localidade)
        setFieldValue('endereco.uf', endereco.uf)
    }

    return (
        <KeyboardAvoidingView behavior={'padding'}
            keyboardVerticalOffset={(Platform.OS === 'ios') ? 20 : 0}
            style={{ flex: 1 }}
        >
            <ScrollView style={{ flex: 1, width: '100%', top: 0 }} >
                <FormContainer>
                    <FormTextInputError>{errors && errors.titulo}</FormTextInputError>
                    <InputView>
                        <FormTextInput value={values.titulo} name="titulo" placeholder="TITULO DA TAREFA..."
                            onChangeText={text => setFieldValue('titulo', text)} />
                    </InputView>

                    <InputAreaView>
                        <FormTextInput
                            onChangeText={text => setFieldValue('descricao', text)}
                            placeholder="DESCRIÇÃO DA TAREFA..." numberOfLines={4} multiline={true} />
                    </InputAreaView>

                    <FormTextInputError>{errors && errors.datahora}</FormTextInputError>
                    <InputView>
                        <DatePickerCustom onChangeDate={(data) => setFieldValue('datahora', `${data.date}`)} />
                    </InputView>

                    <InputView>
                        <FormTextInput keyboardType="numeric" placeholder="CEP..."
                            onEndEditing={ev => {
                                setFieldValue('endereco.cep', ev.nativeEvent.text)
                                setEndereco(ev.nativeEvent.text, cb)
                            }} />
                    </InputView>

                    <FormTextInputError>{errors && errors['endereco.logradouro']}</FormTextInputError>
                    <InputView>
                        <FormTextInput
                            value={values.endereco.logradouro}
                            placeholder="RUA / AV..."
                            onChangeText={text => setFieldValue('endereco.logradouro', text)} />
                    </InputView>

                    <InputView>
                        <FormTextInput placeholder="NÚMERO..."
                            onChangeText={text => setFieldValue('endereco.numero', text)} />
                    </InputView>

                    <InputView>
                        <FormTextInput placeholder="COMPLEMENTO..."
                            value={values.endereco.complemento}
                            onChangeText={text => setFieldValue('endereco.complemento', text)} />
                    </InputView>

                    <InputView>
                        <FormTextInput placeholder="BAIRRO..."
                            value={values.endereco.bairro}
                            onChangeText={text => setFieldValue('endereco.bairro', text)} />
                    </InputView>

                    <InputView>
                        <FormTextInput placeholder="LOCALIDADE..."
                            value={values.endereco.localidade}
                            onChangeText={text => setFieldValue('endereco.localidade', text)} />
                    </InputView>

                    <InputView>
                        <FormTextInput placeholder="UF..."
                            value={values.endereco.uf}
                            onChangeText={text => setFieldValue('endereco.uf', text)} />
                    </InputView>

                    <TouchableOpacity onPress={handleSubmit} >
                        <TextBtnCadastro>SALVAR</TextBtnCadastro>
                    </TouchableOpacity>

                </FormContainer>
            </ScrollView >
        </KeyboardAvoidingView>
    )
}

export default withFormik({
    mapPropsToValues: (props) => ({
        titulo: '',
        descricao: '',
        datahora: '',
        endereco: {
            cep: ""
        },
        ...props.newvalues
    }),
    validationSchema: yup.object().shape({
        titulo: yup.string().required(defaullTextError),
        datahora: yup.string().required(defaullTextError),
        //'endereco.logradouro': yup.string().required(defaullTextError),
    }),
    handleSubmit: (values, props) => {
        console.log(values);
    }
})(FormTask)