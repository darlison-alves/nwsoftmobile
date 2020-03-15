import styled from 'styled-components'
import { StyleSheet } from 'react-native'
import { Colors } from '../../../defaults/constants'

export const LoginContainer = styled.View`
    flex: 1;
    backgroundColor: #003f5c;
    alignItems: center;
    justifyContent: center;
`

export const InputView = styled.View`
    width: 80%;
    backgroundColor: #465881;
    height: 50px;
    marginBottom: 20px;
    justifyContent: center;
    padding: 20px;    
`

export const InputText = styled.TextInput`
    height: 50px;
    color: white
`
export const Logo = styled.Text`
    fontWeight: bold;
    fontSize: 50px;
    color: #fb5b5a;
    marginBottom: 40px;
`

export const LogoSub = styled.Text`    
    color: ${ Colors.lightgrey};    
`
export const TouchableOpacity = styled.TouchableOpacity`
    width: 80%;
    backgroundColor: #fb5b5a;    
    height:50px;
    alignItems: center;
    justifyContent: center;
    marginTop:40px;
    marginBottom:10px;
`
export const TextBtnLogin = styled.Text`
    fontWeight: bold;
    color: white;
`

export const loginBtn = StyleSheet.create({
    login: {
        width: '80%',

    }
})