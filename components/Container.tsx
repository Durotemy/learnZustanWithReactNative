
/* eslint-disable prettier/prettier */
import React, { ReactNode } from 'react';
import { View } from 'react-native';

import { ALIGN_ITEMS, FLEX_DIRECTION, JUSTIFY_CONTENT, STYLES } from '../utils/Types';
import { normalizeSize } from '@/utils/Helpers';

interface IContainer {
    children: ReactNode;
    flexDirection?: FLEX_DIRECTION;
    alignItems?: ALIGN_ITEMS;
    justifyContent?: JUSTIFY_CONTENT;
    width?: any;
    height?: any;
    paddingBottom?: number;
    paddingTop?: number;
    paddingVertical?: number;
    paddingHorizontal?: number;
    marginLeft?: number;
    marginRight?: number;
    marginTop?: number;
    marginBottom?: number;
    style?: STYLES;
    borderRadius?: number;
    backgroundColor?: string;
    padding?: number;
    borderWidth?: number;
    marginHorizontal?: number;
    marginVertical?: number;
    gap?: number;
    flexWrap?: any;
    borderColor?: any;
    alignSelf?: any;
    borderStyle?:any;
}

const Container = ({
    flexDirection = 'column',
    children,
    alignItems,
    alignSelf,
    justifyContent,
    width,
    height,
    paddingBottom = 0,
    paddingTop = 0,
    style,
    paddingHorizontal = 0,
    paddingVertical = 0,
    marginLeft = 0,
    marginRight = 0,
    marginTop = 0,
    marginBottom = 0,
    borderRadius,
    backgroundColor,
    padding,
    borderWidth,
    marginHorizontal = 0,
    marginVertical = 0,
    gap,
    flexWrap,
    borderColor,
    borderStyle = 'solid',

}: IContainer) => {
    const paddingStyles = padding
        ? { padding: normalizeSize(padding) }
        : {
              paddingTop: normalizeSize(paddingTop),
              paddingBottom: normalizeSize(paddingBottom),
              paddingHorizontal: normalizeSize(paddingHorizontal),
              paddingVertical: normalizeSize(paddingVertical),
          };

    return (
        <View
            style={[
                style,
                paddingStyles,
                {
                    flexDirection,
                    alignItems,
                    justifyContent,
                    width,
                    height,
                    borderStyle:borderStyle,
                    marginHorizontal: normalizeSize(marginHorizontal),
                    marginVertical: normalizeSize(marginVertical),
                    marginLeft: normalizeSize(marginLeft),
                    marginRight: normalizeSize(marginRight),
                    marginTop: normalizeSize(marginTop),
                    marginBottom: normalizeSize(marginBottom),
                    borderRadius,
                    backgroundColor,
                    borderWidth,

                    gap,
                    alignSelf,
                    flexWrap,
                    borderColor,
                },
            ]}>
            {children}
        </View>
    );
};
export default Container;
