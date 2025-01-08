const API_URL = process.env.EXPO_PUBLIC_API_URL;

export  const  login = async (email:string, password:string) => {
    const res =  await fetch(`${API_URL}/auth/login`, {
        method: 'POST',
        headers: {
            'Content-Type':'Application/json'
        },
        body: JSON.stringify({email, password})
    });

    const data = await res.json();
    console.log("datafromsigninr",data)

}

export async function register (email: string, password: string) {
    const res = await fetch(`${API_URL}/auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });
  
    const data = await res.json();
    if (!res.ok) {
      throw Error('Failed to login');
    }
    return data;
  }