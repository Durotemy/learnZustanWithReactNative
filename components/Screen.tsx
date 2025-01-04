import React from 'react';
import { SafeAreaView, View, StatusBar, Platform, StyleSheet } from 'react-native';
import { SafeAreaProvider, SafeAreaView as SafeAreaWrapper } from 'react-native-safe-area-context';
// import styles from '../utils/styles';
// import { normalizeSize } from '../utils/helpers';
// import COLORS from '../utils/colors';
import { ScrollView } from 'react-native';
import COLORS from '@/utils/Colors';
import styles from '@/utils/styles';
// import FullScreenLoader from './Loader/FullScreenLoader';
// import styles from '../utils/styles';


interface IScreen {
    children: any;
    style?: any;
    applyPadding?: boolean;
    loading?: boolean;
    hasChildScroll?: boolean;
}

const Screen = ({ children, style, applyPadding = true, loading = false, hasChildScroll = false }: IScreen) => {
    return (
        <SafeAreaProvider>
            <SafeAreaWrapper style={[styles.screen, style]}>
                <StatusBar
                    translucent={false}
                    backgroundColor={COLORS.white}
                    barStyle="dark-content"
                />
                {hasChildScroll ? (
                    <View style={[applyPadding && styles.contentWrapper]}>
                        {/* {loading ? <FullScreenLoader /> : null} */}
                        {children}
                    </View>
                ) : (
                    <ScrollView style={[applyPadding && styles.contentWrapper]}
                        contentContainerStyle={styles.scrollViewContentContainer}
                    >
                        {/* {loading ? <FullScreenLoader /> : null} */}
                        {children}
                    </ScrollView>
                )}
                {/* </ScrollView> */}
            </SafeAreaWrapper>
        </SafeAreaProvider>
    );
};

// const styles = StyleSheet.create({
//     screen: {
//         flex: 1,
//         backgroundColor: COLORS.white,
//     },
//     contentWrapper: {
//         flex: 1,
//         paddingHorizontal: normalizeSize(10),
//     },
// });

export default Screen;