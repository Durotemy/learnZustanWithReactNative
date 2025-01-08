import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Screen from '@/components/Screen';
import CommonText from '@/components/CommonText';
import useCart from '@/store/cartStore';
import { SCREEN_WIDTH } from '@/utils/Helpers';
import COLORS from '@/utils/Colors';
import SecondaryButton from '@/components/Button/SecondaryButton';
import { Redirect } from 'expo-router';
import Container from '@/components/Container';
import { Margin } from '@/utils/styles';
import { useMutation } from '@tanstack/react-query';
import { createOrder } from '@/api/orders';

interface CartDetailsProps {
  name: string;
  price: number;
}


const renderItem = ({ item }: { item: CartDetailsProps }) => {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.itemDetails}>
        <CommonText label={item?.name} />
        <CommonText label={`$${item?.price}`} />
      </View>
      <CommonText label={1} marginTop={10} />
    </View>
  );
};

const CartDetails = () => {
  const cartItems = useCart((state) => state.items);
  const clearCart = useCart((state) => state.clearCart);

  // console.log("cartItems", cartItems)
  const createOrderMutation = useMutation({
    mutationFn: () =>
      createOrder(
        cartItems.map((item) => ({
          productId: item.id,
          quantity: item.quantity || 1,
          price: item.price
        }))
      ),
      onSuccess:(data)=>{
        clearCart();
        console.log('datahhhhh', data)
      },
      onError:(error)=>{
        console.log(error)
      }
  })


  const handleCheckout = () => {
    createOrderMutation.mutate()
  };

  if (cartItems.length === 0) {
    return <Redirect href="/" />
  }

  return (
    <Screen>
      <Container style={{
        position: 'absolute',
        height: '90%',
        marginTop: 10,
      }}>
        <FlatList
          data={cartItems}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={styles.listContent}
        />
        <View style={{
          width: '95%',
          position: 'relative',
          alignSelf: 'center',
          top: 10,
        }}>
          <SecondaryButton backgroundColor={COLORS.black} label={'Checkout'} onPress={handleCheckout} />

        </View>
      </Container>
    </Screen>
  );
};

export default CartDetails;

const styles = StyleSheet.create({
  cartContainer: {
    marginTop: 10,
    marginBottom: 40,
    height: '93%',
  },
  listContent: {
    gap: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 50,
    padding: 10,
    backgroundColor: COLORS.white,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 1, height: 1 },
    elevation: 10,
    width: SCREEN_WIDTH - 10,
    alignSelf: 'center',
    borderRadius: 9,
  },
  itemDetails: {
    width: '95%',
  },
});
