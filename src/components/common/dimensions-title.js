import { Dimensions, PixelRatio } from 'react-native';
import styled from 'styled-components'

const widthPercentageToDP = widthPercent => {
    const screenWidth = Dimensions.get('window').width;
    return PixelRatio.roundToNearestPixel(screenWidth * parseFloat(widthPercent) / 100);
}

const heightPercentageToDP = heightPercent => {
    const screenHeight = Dimensions.get('window').height;
    return PixelRatio.roundToNearestPixel(screenHeight * parseFloat(heightPercent) / 100)
}

const Tile = styled.View`
    width: ${widthPercentageToDP('98%')},
    height: ${heightPercentageToDP('10%')}
`