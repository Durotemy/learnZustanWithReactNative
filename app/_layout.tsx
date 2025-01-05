import CommonText from "@/components/CommonText";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Link, Stack } from "expo-router";
import { ReactNode } from "react";
import { Text } from "react-native";

const RootLayout = ({ children }: { children: ReactNode }) => {

const queryClient = new QueryClient();

    return (
        <QueryClientProvider client={queryClient}>
        <Stack screenOptions={{ headerRight: () => <Link href="/cart"><CommonText fontSize={18}  label="cart"/></Link> }}>
            <Stack.Screen name="product/[id]" options={{ title: 'Product' }} />
            <Stack.Screen name="index" />
            <Stack.Screen name="about"  />
        </Stack>
        </QueryClientProvider>
    );
};

export default RootLayout;