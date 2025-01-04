import COLORS from '@/utils/Colors';
import { normalizeSize } from '@/utils/Helpers';
import styles from '@/utils/styles';
import React from 'react';
import {ActivityIndicator, Text, TouchableOpacity, View} from 'react-native';

const SecondaryButton = ({
  onPress,
  label,
  disabled,
  styleWrapper,
  loading,
  outlined,
  elevation = 7,
  activityColor = COLORS.white,
  width,
  Icon,
  marginBottom,
  marginHorizontal,
  padding,
  marginTop,
  marginVertical,
  borderRadius = 6,
  fontSize = normalizeSize(16),
  backgroundColor = COLORS.mainGreen,
}: any) => {
  console.log('Iconhere', Icon);
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.secondaryWrapper,
        {
          backgroundColor: outlined
            ? COLORS.white
            : disabled
            ? COLORS.disabled
            : backgroundColor,
          elevation: disabled ? 0 : elevation,
          borderWidth: outlined ? 1 : 0,
          borderColor: COLORS.lightGray,
          width: width,
          padding: padding,
          marginBottom: marginBottom,
          marginVertical: marginVertical,
          marginTop: marginTop,
          borderRadius,
          marginHorizontal,
        },
        styleWrapper,
      ]}
      disabled={disabled}>
      <View style={styles.contentWrapper}>
        {loading ? (
          <ActivityIndicator
            color={disabled ? COLORS.deepGreen : activityColor}
          />
        ) : (
          <>
            <View>{Icon && <Icon />}</View>
            <Text
              style={[
                styles.secondaryText,
                {
                  color: disabled
                    ? COLORS.disabledText
                    : outlined
                    ? COLORS.darkGreen
                    : COLORS.white,
                  marginLeft: Icon ? 1 : 0,
                  fontSize,
                },
              ]}>
              {label}
            </Text>
          </>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default SecondaryButton;