import CommonText from "@/components/CommonText";
import useAuth from "@/store/authStore";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Link, Stack } from "expo-router";
import { ReactNode } from "react";

const queryClient = new QueryClient();

const RootLayout = ({ children }: { children: ReactNode }) => {
    const isLoggedIn = useAuth((state) => !!state.token);

    const screenOptions = {
        headerRight: () => (
            <Link href="/cart">
                <CommonText fontSize={18} label="Cart" />
            </Link>
        ),
        headerLeft: isLoggedIn
            ? undefined
            : () => (
                <Link href="/login">
                    <CommonText fontSize={18} label="Login" />
                </Link>
            ),
    };

    return (
        <QueryClientProvider client={queryClient}>
            <Stack screenOptions={screenOptions}>
                <Stack.Screen name="product/[id]" options={{ title: "Product" }} />
                <Stack.Screen name="index" />
                <Stack.Screen name="about" />
            </Stack>
        </QueryClientProvider>
    );
};

export default RootLayout;
