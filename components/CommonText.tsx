import React from 'react';
import { Text, StyleSheet, TextProps } from 'react-native';
import {
  useFonts,
  Lato_100Thin,
  Lato_100Thin_Italic,
  Lato_300Light,
  Lato_300Light_Italic,
  Lato_400Regular,
  Lato_400Regular_Italic,
  Lato_700Bold,
  Lato_700Bold_Italic,
  Lato_900Black,
  Lato_900Black_Italic,
} from '@expo-google-fonts/lato';

interface CustomTextProps extends TextProps {
  bold?: boolean; 
  style?: any; 
  label?: string | number;
  marginTop?: number;
  height?: number;
  backgroundColor?: string;
  paddingVertical?: number;
  marginBottom?: number;
  onPress?: () => void;
  color?: string;
  fontSize?: number;
}

const CommonText: React.FC<CustomTextProps> = ({ bold, style, label, marginTop,marginBottom, height, backgroundColor, paddingVertical, onPress, color, fontSize=15 }) => {
  let [fontsLoaded] = useFonts({
    Lato_100Thin,
    Lato_100Thin_Italic,
    Lato_300Light,
    Lato_300Light_Italic,
    Lato_400Regular,
    Lato_400Regular_Italic,
    Lato_700Bold,
    Lato_700Bold_Italic,
    Lato_900Black,
    Lato_900Black_Italic,
  });



  return (
    <Text
    onPress={onPress}
      style={[
        bold ? styles.bold : styles.regular,
        style,
        { marginTop, height,fontSize, backgroundColor, paddingVertical, marginBottom,color}, // Properly handle marginTop
      ]}
     
    >
      {label}
    </Text>
  );
};

const styles = StyleSheet.create({
  regular: {
    fontFamily: 'Lato_700Bold_Italic,',
    fontSize: 16,
    color: '#000',
  
  },
  bold: {
    fontFamily: 'Lato_900Black',
    fontSize: 16,
    color: '#000',
  },
});

export default CommonText;
