import { StyleSheet, Text, View, ImageSourcePropType, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { TextInput } from 'react-native';
// import { normalizeSize } from '../../utils/helpers';
// import CommonText from '../CommonText';
// import COLORS from '../../utils/colors';
// import Container from '../Container';
// import { useNavigation } from '@react-navigation/native';
// import { ROUTES } from '../../navigation/routes';
// import { Icon } from '@rneui/base';
import { Platform } from 'react-native';
import Container from './Container';
import CommonText from './CommonText';
import { normalizeSize } from '@/utils/Helpers';
import COLORS from '@/utils/Colors';


interface InputInterface {

    Icon?: ImageSourcePropType,
    placeholder: string,
    prefex?: string,
    label?: string,
    divider?: boolean;
    image?: string | any;
    OpenEyeIcon?: any;
    ClosedEyeIcon?: any;
    isPassword?: boolean;
    forgetPassword?: string;
    value?: string;
    numberOfLines?:number;
    onChangeText?: (text: string) => void;
}

const InputField = ({ Icon, placeholder, prefex, label, divider, OpenEyeIcon,

    ClosedEyeIcon,
    isPassword, value, onChangeText, forgetPassword, numberOfLines = 1 }: InputInterface) => {


    const [isPasswordVisible, setIsPasswordVisible] = useState(!isPassword);

    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };


    // const navigation = useNavigation()

    const handleForgotPassword = () => {
    //   navigation?.navigate(ROUTES.passwordReset)
    }


    return (
        <View style={styles.container}>
            <Container justifyContent="space-between" flexDirection='row'>
                {label && <CommonText label={label}  fontSize={14} color={COLORS.blackText} />}
                {forgetPassword && <TouchableOpacity onPress={handleForgotPassword}>
                    <Text style={styles.forgotPassword}>{forgetPassword}</Text>
                </TouchableOpacity>}
            </Container>
            <View style={[styles.inputWrapper]}>
                <View style={styles.iconContainer}>
                   
                    {prefex && <Text style={styles.countryCode}>{prefex}</Text>}

                </View>

                {divider && <View style={styles.divider} />}

                <TextInput
                    placeholder={placeholder}
                    style={[styles.input, numberOfLines > 1 && { height: normalizeSize(20 * numberOfLines) }]}

                    // style={styles.input}
                    placeholderTextColor="black"
                    secureTextEntry={!isPasswordVisible}
                    autoCapitalize="none"
                    autoCorrect={false}
                    keyboardType="default"
                    value={value}
                    onChangeText={onChangeText}
                    numberOfLines={numberOfLines}

                />

                {isPassword &&
                    <TouchableOpacity style={styles.rightIcon} onPress={togglePasswordVisibility} >
                        {isPasswordVisible ? <OpenEyeIcon /> : <ClosedEyeIcon />}
                    </TouchableOpacity>}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginVertical: normalizeSize(5),
    },
    forgotPassword: {
        color: COLORS.mainGreen,
        fontSize: normalizeSize(12),
    },
    inputWrapper: {
        backgroundColor: COLORS.faintGray,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        paddingHorizontal: 10,
        marginVertical: 10,
        width: '100%',
        height: normalizeSize(50),
    },
    iconContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: normalizeSize(10),
    },
    icon: {
        width: 24,
        height: 24,
        marginRight: 10,
    },
    rightIcon: {
        justifyContent: 'flex-end',
        marginLeft: 'auto',
    },
    countryCode: {
        fontSize: 16,
        marginRight: 2,
        color: COLORS.faintDark,
        paddingHorizontal: normalizeSize(5)
    },
    divider: {
        width: 1,
        height: '50%',
        backgroundColor: COLORS.mediumGray,
        marginHorizontal: 5,
    },
    inputContainer: {
        borderBottomWidth: 0,
        flex: 1,
    },
    containerStyle: {
        flex: 1,
        padding: 0,
        margin: 0,
    },
    input: {
        // flex: 1,
        fontSize: normalizeSize(16),
        color: COLORS.black,
        
    },
});

export default InputField;