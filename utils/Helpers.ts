import {Dimensions, PixelRatio, Platform} from 'react-native';
export const {width: SCREEN_WIDTH} = Dimensions.get('window');

export const normalizeSize = (size: number) => {
    let scale = SCREEN_WIDTH / 320;

    const newSize = size * scale;
    if (Platform.OS === 'ios' && Platform.isTV === false) {
      return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 10;
    } else if (Platform.OS === 'ios') {
      return Math.round(PixelRatio.roundToNearestPixel(newSize));
    } else if (Platform.OS === 'web') {
      scale = SCREEN_WIDTH / 1024;
      return size + 2;
    } else {
      return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
    }
  };