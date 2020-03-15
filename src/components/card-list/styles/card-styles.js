import styled from 'styled-components';


export const LIGHTGREY = '#999999'
export const DARKGREY = '#666666'

export const PURPLE = "#733DBE"

export const ContainerCard = styled.View` 
    flexDirection: row;
    padding: 20px 0px;
    width: 100%;
    height: auto;
    borderColor: #003f5c;
    borderRadius: 5px;
    borderLeftWidth: 5px;
    zIndex: 2;
    marginTop: 8px;
    marginLeft: 5px;
    marginRight: 5px;
    shadow-color: #F5FCFF;
    shadowOpacity: 0.5;
    shadowRadius: 3;
    shadowOffset: {
    height: 0,
    width: 0,
    };
    elevation: 2;
    backgroundColor: #fff
`

export const CardBody = styled.View`
    flexDirection: column;
    marginLeft: 10px;
`
export const CardTitle = styled.Text`
    font-size: 18px;
    color: ${LIGHTGREY};
    textTransform: uppercase;
    marginBottom: 5px;
`

export const CardDescriptionBody = styled.View`
    flexDirection: column;
`

export const CardDescription = styled.Text`
    fontSize: 16px;
`

export const CardSubDescriptionBody = styled.View`
    alignItems: center;
    flexDirection: row;
    marginTop: 2px;
`

export const CardSubDescription = styled.Text`
    fontSize: 14px;
    color: ${DARKGREY};
`

export const CardFooterText = styled.Text`
    marginTop: 5px
    fontSize: 12px;
    color: ${LIGHTGREY}
`


export const ContainerImage = styled.View`
    margin: 0px 5px 0px 10px
`

export const StyledView = styled.View`
  borderRadius: 4;
  shadow-color: ${LIGHTGREY};
  shadow-offset: {width: 0, height: 2};
  shadow-opacity: 0.8;
  shadow-radius: 2;
  elevation: 5;
  zIndex: 1
`