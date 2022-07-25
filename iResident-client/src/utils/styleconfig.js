import { Dimensions, Platform, PixelRatio } from 'react-native';

const { width, height } = Dimensions.get('window');
const isIphone = Platform.OS === 'ios';
const isAndroid = Platform.OS === 'android';
const widthPer = width / 100;
const heightPer = height / 100;
const deviceType = width < 480 ? 'phone' : 'tablet';
const iPhoneX = Platform.OS === 'ios' && (height === 812 || height === 896);
const ratioCount = Math.sqrt(height * height + width * width) / 1000;

const isTablet = () => {
  if (isIphone) {
    return Platform.isPad;
  } else {
    return height / width <= 1.6;
  }
};

const APP_FONTS = {
  ARABOTO_BLACK: 'Araboto-Black',
  ARABOTO_BOLD: 'Araboto-Bold',
  ARABOTO_LIGHT: 'Araboto-Light',
  ARABOTO_MEDIUM: 'Araboto-Medium',
  ARABOTO_NORMAL: 'Araboto-Normal',
  ARABOTO_THIN: 'Araboto-Thin',

};
export default {
  countPixelRatio: (size) => size * ratioCount,
  responsiveHeight: (size) => size * heightPer,
  responsiveWidth: (size) => size * widthPer,
  smartScale: (value) => {
    const tempHeight =
      Platform.OS === 'ios' ? (iPhoneX ? height - 78 : height) : height - 24;
    if (deviceType == 'phone') {
      return (value * tempHeight) / 667;
    }
    return (value * tempHeight) / 667;
  },
  smartWidthScale: (value) => {
    const tempWidth = width;
    if (deviceType == 'phone') {
      return (value * tempWidth) / 375;
    }
    return (value * tempWidth) / 375;
  },
  fontNormal: APP_FONTS.ARABOTO_NORMAL,
  fontBold: APP_FONTS.ARABOTO_BOLD,
  fontLight: APP_FONTS.ARABOTO_LIGHT,
  fontMedium: APP_FONTS.ARABOTO_MEDIUM,
  fontExtraBold: APP_FONTS.ARABOTO_BLACK,
  fontThin: APP_FONTS.ARABOTO_THIN,
  width,
  height,
  isPhone: !isTablet(),
  isTab: isTablet(),
  isIphone,
  isAndroid,
};
