import styled from 'styled-components';

import { Colors } from '../../../defaults/constants';

export const FormContainer = styled.View`
    flex: 1;
    backgroundColor: #003f5c;
    alignItems: center;
    justifyContent: center;
`

export const FormTextInput = styled.TextInput`
    height: 50px;
    color: white;    
`
export const FormTextInputError = styled.Text`
    color: ${Colors.errorBackground}

`
export const InputAreaView = styled.View`
    width: 80%;
    backgroundColor: #465881;
    height: 100px;
    marginBottom: 20px;
    justifyContent: center;
    padding: 20px;    
`
export const Title = styled.Text`
    fontWeight: bold;
    fontSize: 25px;
    color: #fb5b5a;
    marginBottom: 40px;
`

export const TextBtnCadastro = styled.Text`
    fontWeight: bold;
    color: white;
`