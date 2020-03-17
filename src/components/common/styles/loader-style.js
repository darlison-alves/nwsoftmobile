import styled from 'styled-components';
import { Colors } from '../../../defaults/constants';

export const Wrapper = styled.View`
    zIndex: 9;
    backgroundColor: rgba(0,0,0,0.6);
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    flex: 1;
    justifyContent: center;
    alignItems: center;
`

export const WrapperText = styled.Text`
    color: ${Colors.white}
`