import { SafeAreaView, StyleSheet, Text, View, FlatList, ActivityIndicator } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import products from "../assets/products.json"
import Products from '@/components/products'
import Screen from '@/components/Screen'
import Container from '@/components/Container'
import { SCREEN_HEIGHT } from '@/utils/styles'
import { fetchProducts } from '@/api/products'
import { useQuery } from '@tanstack/react-query'
import COLORS from '@/utils/Colors'

const HomeScreen = () => {

  const {data, isLoading = true, isError} = useQuery({
    queryKey: ['products'],
    queryFn: fetchProducts,
  });

  return (
    <Screen hasChildScroll={true} >
      <Text style={{
        fontSize: 20,
        marginBottom: 10,
        marginLeft: 12,
        marginTop: 40,
      }}>All product</Text>

      <Container  marginBottom={10} marginTop={10} height={SCREEN_HEIGHT} >
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <Products item={item} />
          )}
          columnWrapperStyle={{
            justifyContent: 'space-between',
            paddingHorizontal: 10,
            paddingVertical: 10,
          }}
          contentContainerStyle={{
            paddingBottom: 120, 
            marginBottom:120,
          }}
          numColumns={2}
          ListFooterComponent={<View style={{ height: 40 }} />}
          showsVerticalScrollIndicator={false}
        />
      </Container>
    </Screen>
  )
}

export default HomeScreen;

const styles = StyleSheet.create({})