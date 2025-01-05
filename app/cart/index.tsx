import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Screen from '@/components/Screen';
import CommonText from '@/components/CommonText';
import useCart from '@/store/cartStore';
import { SCREEN_WIDTH } from '@/utils/Helpers';
import COLORS from '@/utils/Colors';

const CartDetails = () => {
  const cartItems = useCart((state) => state.items);
console.log("cccccc",cartItems);
  const renderItem = ({ item }) => {
    console.log(item);
    return (
      <View style={styles.itemContainer}>
        <View style={styles.itemDetails}>
          <CommonText label={item?.name}  />
          <CommonText label={`$${item?.price}`} />
        </View>
        <CommonText label={1} marginTop={10} />
      </View>
    );
  };

  return (
    <Screen hasChildScroll={true}>
      <View style={styles.cartContainer}>
        <FlatList
          data={cartItems}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={styles.listContent}
        />
      </View>
    </Screen>
  );
};

export default CartDetails;

const styles = StyleSheet.create({
  cartContainer: {
    marginTop: 10,
    marginBottom: 20,
    height: '100%',
  },
  listContent: {
    gap: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 50,
    padding: 10,
    backgroundColor: COLORS.faintWhite,
    width: SCREEN_WIDTH - 10,
    alignSelf: 'center',
    borderRadius: 9,
  },
  itemDetails: {
    width: '70%',
  },
});
