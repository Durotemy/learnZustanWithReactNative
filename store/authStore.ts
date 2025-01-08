import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

const useAuth = create(
  persist(
    (set) => ({
      user: null,
      token: null,

      setUser: (user) => set({ user }),

      setToken: (token) => set({ token }),

      logout: () => set({ user: null, token: null }), // Optionally add a logout function
    }),
    {
      name: 'auth-storage', // Unique key for AsyncStorage
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

export default useAuth;
