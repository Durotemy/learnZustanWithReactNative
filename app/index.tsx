import { SafeAreaView, StyleSheet, Text, View, FlatList, ActivityIndicator } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import products from "../assets/products.json"
import Products from '@/components/products'
import Screen from '@/components/Screen'
import Container from '@/components/Container'
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '@/utils/styles'
import { fetchProducts } from '@/api/products'
import { useQuery } from '@tanstack/react-query'
import COLORS from '@/utils/Colors'

const HomeScreen = () => {

  const { data, isLoading = true, isError } = useQuery({
    queryKey: ['products'],
    queryFn: fetchProducts,
  });

  return (
    <Screen isLoading={isLoading} >
      <Text style={{
        fontSize: 20,
        marginBottom: 10,
        marginLeft: 12,
        marginTop: 10,
      }}>All product</Text>

      <Container width={SCREEN_WIDTH} height={SCREEN_HEIGHT} >
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
            paddingBottom: 20,
            marginBottom: 20,
          }}
          numColumns={2} // Ensures two columns
          ListFooterComponent={<View style={{ height: 40 }} />}
          showsVerticalScrollIndicator={false}
        />
      </Container>
    </Screen>
  )
}

export default HomeScreen;

const styles = StyleSheet.create({})