import styled from 'styled-components';
import { Colors } from '../../../defaults/constants'
import Constants from 'expo-constants'

export const Container = styled.View`
    flex: 1;
    alignItems: center;
    justifyContent: center;
    margin-top: ${Constants.statusBarHeight};
`

export const ContainerInput = styled.View`
    flexDirection: row;
    justifyContent: center;
    alignItems: center;
    background-color: #fff;
    border-width: 0.5;
    border-color: ${Colors.grey};                
    borderRadius: 5px;
    margin-bottom: 17px;
`
export const TitleLogin = styled.Text`
    font-size: 25px;
    fontWeight: bold;
    padding-right: 7px;
    color: ${Colors.grey};
`

export const ButtonLogin = styled.Button`
    background-color: ${Colors.purple}
`

export const HeaderLogin = styled.View`
    flexDirection: row;
    alignItems: center;
    padding-bottom: 37px;
`
export const TextErrorContainer = styled.View`
    flexDirection: row;
    alignItems: center;
    justifyContent: center;    
`

export const TextError = styled.Text`    
    color: red;
`

export const InputLable = styled.Text`
    fontSize: 14px;
    color: ${Colors.grey}
`

export const Input = styled.TextInput`
    paddingHorizontal: 10px;
    paddingVertical: 10px;
    borderRadius: 5px;
    backgroundColor: #FFF;
    marginBottom: 15px;
    marginHorizontal: 20px;
    fontSize: 16px;
    width: 80%;    
`

export const touchableOpaciity = {
    backgroundColor: Colors.errorBackground,
    width: '90%',
    alignItems: 'center',
    borderRadius: 5,
    bottom: "10%",
    position: 'absolute'
}


export const spinnerStyle = {
    width: '90%',
    alignItems: 'center',
    borderRadius: 5,
    bottom: 40,
    position: 'absolute'
}

export const TextButton = styled.Text`
    color: ${Colors.white}; 
    paddingTop: 16px;
    paddingBottom: 15px;
    fontSize: 16px;
`