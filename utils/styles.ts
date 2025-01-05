import {Dimensions, Platform, StatusBar, StyleSheet} from 'react-native';
import COLORS from './Colors';
import { normalizeSize } from './Helpers';

const {height, width} = Dimensions.get('window');

export const isIOS = Platform.OS !== 'android';

// @ts-ignore
export const isIpad = Platform.isPad;
export const isDev = __DEV__;
export const l_margin = height / 7;
export const Margin = width / 20;
export const MinMargin = width / 40;
export const BigTitleFontSize = height / 35;
export const TitleFontSize = height / 45;
export const BorderRadius = height / 200;
export const ButtonFontSize = height / 60;
export const STATUSBAR_HEIGHT = StatusBar.currentHeight;
export const APPBAR_HEIGHT = isIOS ? 50 : 56;
export const SCREEN_HEIGHT = height;
export const SCREEN_WIDTH = width;


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: COLORS.white,
        paddingHorizontal: normalizeSize(10),
      },
      scrollViewContentContainer: {
        padding: 5,
      },
      contentWrapper: {
        // flex: 1,
        // justifyContent: 'center',
        paddingHorizontal: normalizeSize(12),
      },
      primaryText: {
        color: COLORS.blackText,
        fontFamily: 'Inter-Regular',
        fontSize: normalizeSize(14),
        marginLeft: normalizeSize(5),
      },
      primaryWrapper: {
        borderRadius: 28,
        backgroundColor: COLORS.mainGreen,
        paddingLeft: normalizeSize(10),
        paddingRight: normalizeSize(18),
        paddingVertical: 5,
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: normalizeSize(-50),
      },
      secondaryWrapper: {
        // borderRadius: 6,
        // backgroundColor: COLORS.mainGreen,
        // paddingHorizontal: 15,
        paddingVertical: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: normalizeSize(48),
      },
      iconButtonWrapper: {
        borderRadius: 28,
        backgroundColor: COLORS.blackText,
        paddingHorizontal: normalizeSize(20),
        paddingVertical: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: normalizeSize(20),
      },
      tabButtonWrapper: {
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 60,
        minWidth: 93,
      },
      secondaryText: {
        color: COLORS.white,
        fontFamily: 'Inter-SemiBold',
        fontSize: normalizeSize(10),
        textAlign: 'center',
        display: 'flex',
    
    
      },
      iconButtonText: {
        color: COLORS.blackText,
        fontFamily: 'Inter-SemiBold',
        fontSize: normalizeSize(12),
        textAlign: 'center',
        marginLeft: normalizeSize(5),
      },
})

export default styles;