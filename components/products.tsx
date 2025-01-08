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
        <View style={{width: '48%', 
            backgroundColor: '#fff',
            shadowColor: '#000',
            shadowOffset: { width: 1, height: 1 },
            height: 240,
            elevation:10,
            borderRadius:15,
            shadowOpacity: 0.2,
            justifyContent: 'center',
        }}>
        <Link href={`/product/${item.id}`} >
            <View style={{
                borderRadius: 10,
                width:'100%',
                height: 240,
                paddingHorizontal: 5,
                shadowRadius: 4,
                paddingVertical: 10,
                marginBottom: 10, // Space between rows
            }}>
                <Image
                    alt={'Product image'}
                    source={{ uri: item.image }}
                    style={{
                        // alignSelf:'center',
                        height: 140,
                        width:"100%",
                       
                        borderRadius: 20,
                       
                    }}
                    resizeMode='contain'
                />
                <CommonText label={item.name} marginTop={15} color={COLORS.faintDark} bold />
                <CommonText label={`$${item.price}`} paddingVertical={4} bold color={COLORS.black} marginTop={10} />
            </View>
        </Link>
        </View>
    );
};

export default Products;
