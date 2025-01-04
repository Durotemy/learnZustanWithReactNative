import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { router, useLocalSearchParams } from 'expo-router';
import products from '../../assets/products.json'
import Screen from '@/components/Screen';
import { Image } from '@rneui/base';
import { SCREEN_WIDTH } from '@/utils/Helpers';
import Container from '@/components/Container';
import CommonText from '@/components/CommonText';
import COLORS from '@/utils/Colors';
import SecondaryButton from '@/components/Button/SecondaryButton';

const ProductDetails = () => {
  const { id } = useLocalSearchParams();
  const productId = Number(id);
  const singleProduct = products.find((p) => p.id === productId);

  const handleBack = () => {
    console.log('Go back');
    router.back();
  }

  return (
    <Screen>
      <Container width={SCREEN_WIDTH} padding={10}>
        <CommonText onPress={() => handleBack()} label={"Go back"} />
        <View style={styles.shadowContainer}>
          <Image
            source={{ uri: singleProduct?.image }}
            style={{ width: SCREEN_WIDTH, height: 200 }}
            resizeMode="contain"
          />
        </View>
        <Container padding={20} marginTop={20}>
          <CommonText label={singleProduct?.name} bold marginTop={10} color={COLORS.faintDark} paddingVertical={10} />
          <CommonText label={`$${singleProduct?.price}`} bold />
          <CommonText label={singleProduct?.description} marginTop={20} color={COLORS.faintDark} />
        </Container>

        <View style={{ width:'98%', marginLeft:'auto', marginRight:'auto'}}>
          <SecondaryButton marginTop={10} label="Add to cart" backgroundColor={COLORS.black} fontSize={15} fontWeight={"bold"} />
          <SecondaryButton marginTop={10} label="Wishlist" outlined color={COLORS.faintDark}/>
        </View>

      </Container>
    </Screen>
  );
}

export default ProductDetails;

const styles = StyleSheet.create({
  shadowContainer: {
    marginTop: 10,
    alignSelf: 'center',
    width: '95%',
    height: 220,
    elevation: 2,
    borderRadius: 10,
    padding: 10,
    backgroundColor: '#fff',
    // Center the image
    justifyContent: 'center',
    alignItems: 'center',
    // iOS Shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
  },
});
