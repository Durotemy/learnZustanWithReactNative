import useAuth from "@/store/authStore";

const API_URL = process.env.EXPO_PUBLIC_API_URL;
const token = (useAuth.getState() as { token: string }).token;

export const createOrder = async (items: any[]) => {
    const res = await fetch(`${API_URL}/orders`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token,
        },
        body: JSON.stringify({ order: {}, items }),
    })

    const data = res.json();
    return data;
}
