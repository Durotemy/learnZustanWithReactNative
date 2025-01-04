import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { Image } from '@rneui/themed';
import Container from './Container';
import { SCREEN_WIDTH } from '@/utils/Helpers';
import SecondaryButton from './Button/SecondaryButton';
import CommonText from './CommonText';
import COLORS from '@/utils/Colors';
import { Link, router } from 'expo-router';
import { isIOS } from '@rneui/base';


interface IProducts {
    image: string;
    name: string;
    price: number;
    description: string;
    id: number;

}

const Products = ({ item }: { item: IProducts }) => {

    return (
        <Link href={`/product/${item.id}`}>
            <View style={{
                width: isIOS ? SCREEN_WIDTH / 2 - 15 : SCREEN_WIDTH / 2 - 35,
                elevation: 5,
                backgroundColor: COLORS.pureWhite,
                borderRadius: 10,
                height: 250,
                paddingHorizontal: 5,
                shadowColor: '#000',
                shadowOffset: { width: 1, height: 1 },
                shadowOpacity: 0.2,
                shadowRadius: 4,
                paddingVertical: 10,
            }}>
                <Image
                    alt={'Product image'}
                    source={{ uri: item.image }}
                    style={{
                        width: SCREEN_WIDTH / 2 - 40,
                        height: 140,
                        borderRadius: 20,
                        alignSelf: 'center',
                    }}
                    resizeMode='contain'
                />
                <CommonText label={item.name} marginTop={10} />
                <CommonText label={item.price} paddingVertical={4} />
                <View style={{
                    position: 'absolute',
                    bottom: 0,
                    width: '100%',
                    alignSelf: 'center',
                }}>
                </View>
            </View>
        </Link>
    )
}

export default Products

