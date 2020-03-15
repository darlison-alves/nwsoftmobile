import styled from 'styled-components';
import { Colors } from '../../../defaults/constants';

export const ContainerDetails = styled.View`
    backgroundColor: ${Colors.white};
    width: 100%;
    height: 80%;
    bottom: 0;
    position: absolute;
    justifyContent: center;
    alignItems: center;
    borderTopLeftRadius: 30px;
    borderTopRightRadius: 30px;
`


export const Description = styled.Text`
    padding: 0px 40px;
    lineHeight: 30;
    font-size: 16px;
    color: ${Colors.grey}
`

export const ContainerTextHour = styled.View`
    justifyContent: center;
    alignItems: center;
    flexDirection: row;
    padding: 0px 90px 30px 0px;
`
export const TextHour = styled.Text`
    padding-left: 2px;
    color: ${Colors.lightgrey};
    font-size: 16px
`


export const HeaderDetail = styled.View`
    flexDirection: row;
    margin: 27px 32px 0px 32px;
    justifyContent: center;
    alignItems: center;
    position:absolute;
    top:0
    
`

export const HeaderDetailText = styled.Text`
    font-size: 22px;
    width: 70%
    marginLeft: 10px;
    fontWeight: bold;
`

export const HeaderDetailCard = styled.View`
    flex:1;
    flexDirection:column;
    alignItems: center;
    backgroundColor: rgba(115, 61, 190, 0.1);
    borderRadius: 5px
`


export const HeaderDetailCardText = styled.Text`    
    color: #733DBE;
    font-size: 22px
    opacity: 1 !important
    fontWeight: bold
    zIndex: 2
    position: relative
    margin: 9px 16px 0px 17px
`

export const HeaderDetailCardTextSub = styled.Text`    
    color: #733DBE;
    font-size: 14px;
    margin: 0px 16px 9px 17px;
    textTransform: uppercase;
`