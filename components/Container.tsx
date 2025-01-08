import React, { ReactNode } from 'react';
import { View, StyleSheet } from 'react-native';
import { normalizeSize } from '@/utils/Helpers';

interface ContainerProps {
  children: ReactNode;
  flexDirection?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  alignItems?: 'flex-start' | 'center' | 'flex-end' | 'stretch' | 'baseline';
  justifyContent?:
    | 'flex-start'
    | 'center'
    | 'flex-end'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  width?: number | string;
  height?: number | string;
  padding?: number;
  margin?: number;
  paddingHorizontal?: number;
  paddingVertical?: number;
  marginHorizontal?: number;
  marginVertical?: number;
  borderRadius?: number;
  backgroundColor?: string;
  borderWidth?: number;
  borderColor?: string;
  flexWrap?: 'wrap' | 'nowrap' | 'wrap-reverse';
  gap?: number;
  style?: object;
}

const Container: React.FC<ContainerProps> = ({
  children,
  flexDirection = 'column',
  alignItems = 'stretch',
  justifyContent = 'flex-start',
  width = '100%',
  height,
  padding = 0,
  margin = 0,
  paddingHorizontal = 0,
  paddingVertical = 0,
  marginHorizontal = 0,
  marginVertical = 0,
  borderRadius = 0,
  backgroundColor = 'transparent',
  borderWidth = 0,
  borderColor = 'transparent',
  flexWrap = 'nowrap',
  gap,
  style = {},
}) => {
  return (
    <View
      style={[
        {
          flexDirection,
          alignItems,
          justifyContent,
          width,
          height,
          padding: normalizeSize(padding),
          margin: normalizeSize(margin),
          paddingHorizontal: normalizeSize(paddingHorizontal),
          paddingVertical: normalizeSize(paddingVertical),
          marginHorizontal: normalizeSize(marginHorizontal),
          marginVertical: normalizeSize(marginVertical),
          borderRadius: normalizeSize(borderRadius),
          backgroundColor,
          borderWidth,
          borderColor,
          flexWrap,
          gap: normalizeSize(gap || 0),
        },
        style,
      ]}
    >
      {children}
    </View>
  );
};

export default Container;
