import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

const useCart = create(
  persist(
    (set) => ({
      items: [],
      addProduct: (product) => set((state) => ({ items: [...state.items, product] })),
      clearCart: () => set({ items: [] }),
    }),
    {
      name: 'cart-storage', // Unique key for AsyncStorage
      storage: {
        getItem: async (name) => {
          const value = await AsyncStorage.getItem(name);
          return value ? JSON.parse(value) : null; // Parse string to JSON
        },
        setItem: async (name, value) => {
          await AsyncStorage.setItem(name, JSON.stringify(value)); // Stringify object
        },
        removeItem: async (name) => {
          await AsyncStorage.removeItem(name);
        },
      },
    }
  )
);

export default useCart;
