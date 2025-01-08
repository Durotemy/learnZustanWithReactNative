import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  View,
  ScrollView,
  ActivityIndicator,
  StyleSheet,
  Platform,
} from 'react-native';
import { normalizeSize } from '@/utils/Helpers';

interface ScreenProps {
  children: React.ReactNode;
  style?: object;
  isLoading?: boolean;
  useScrollView?: boolean;
  backgroundColor?: string;
}

const Screen: React.FC<ScreenProps> = ({
  children,
  style = {},
  isLoading = false,
  useScrollView = false,
  backgroundColor = '#fff',
}) => {
  return (
    <SafeAreaView style={[styles.container, { backgroundColor }]}>
      <StatusBar
        translucent={false}
        backgroundColor={backgroundColor}
        barStyle={Platform.OS === 'ios' ? 'dark-content' : 'light-content'}
      />
      {isLoading ? (
        <View style={styles.loaderContainer}>
          <ActivityIndicator size="large" color="#000" />
        </View>
      ) : useScrollView ? (
        <ScrollView contentContainerStyle={[styles.scrollContent, style]}>
          {children}
        </ScrollView>
      ) : (
        <View style={[styles.content, style]}>{children}</View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
  },
});

export default Screen;
