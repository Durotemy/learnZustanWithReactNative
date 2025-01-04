import { Stack } from "expo-router";
import { ReactNode } from "react";

const RootLayout = ({ children }: { children: ReactNode }) => {
    return (
        <Stack >
            <Stack.Screen name="product/[id]" options={{ title: 'Product',headerShown: false }} />
            <Stack.Screen name="index" options={{ headerShown: false }} />
            <Stack.Screen name="about" options={{ headerShown: false }} />
        </Stack>
    );
};

export default RootLayout;