const API_URL = process.env.EXPO_PUBLIC_API_URL;
export const fetchProducts = async () => {
    try {
        const response = await fetch(`${API_URL}/products`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching products: ', error);
    }
}

export const fetchProduct = async (id: number) => {
    try {
        const response = await fetch(`${API_URL}/products/${id}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching product: ', error);
    }
}


// https://fakestoreapi.com/products