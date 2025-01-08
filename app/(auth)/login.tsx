import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Screen from '@/components/Screen';
import Container from '@/components/Container';
import CommonText from '@/components/CommonText';
import InputField from '@/components/Input';
import SecondaryButton from '@/components/Button/SecondaryButton';
import COLORS from '@/utils/Colors';
import { useMutation } from '@tanstack/react-query';
import { login, register } from '@/api/auth';
import useAuth from '@/store/authStore';
import { Redirect, router } from 'expo-router';

const LoginScreen = () => {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const setUser = useAuth((s) => s.setUser);
  const setToken = useAuth((s) => s.setToken);
  const isLoggedIn = useAuth((s) => !!s.token)

  

  console.log("setToken", setToken)
  console.log("eeeeee", isLoggedIn)
  useEffect(() => {
    if (isLoggedIn) {
      router.push('/'); 
    }
  }, [isLoggedIn, router]); 


  const loginMutation = useMutation({
    mutationFn: () => login(email, password),
    onSuccess: (data) => {
      console.log('SUccess: ', data);
      if (data.user && data.token) {
        setUser(data.user);
        setToken(data.token);
      }
    },
    onError: () => {
      console.log('Error');
    },
  });
  const registerMutation = useMutation({
    mutationFn: () => register(email, password),
    onSuccess: (data) => {
      console.log('SUccess sign up: ', data);
      if (data.user && data.token) {
        setUser(data.user);
        setToken(data.token);
      }
    },
    onError: (error) => {
      console.log('Error: ', error);
    },
  });

  const { status: loginStatus } = loginMutation;
  const { status: registerStatus } = registerMutation;

  const isLoading = loginStatus === 'pending';
  const isFetching = loginStatus === 'pending';
  const signUpLoading = registerStatus === 'pending';
  const signUpFetching = registerStatus === 'pending';
  return (
    <Screen isLoading={isLoading || isFetching || signUpLoading || signUpFetching}>
      <Container paddingHorizontal={5}>
        <InputField placeholder={'Name'} label={"Name"} value={email} onChangeText={setEmail} />
        <InputField placeholder='Password' label={"Password"} value={password} onChangeText={setPassword} />


        <Container>
          <SecondaryButton onPress={() => loginMutation.mutate()} label={"Sign In"} backgroundColor={COLORS.black} marginTop={10} />
          <SecondaryButton onPress={() => registerMutation.mutate()} outlined label={"Sign Up"} backgroundColor={COLORS.black} marginTop={10} />

        </Container>
      </Container>
    </Screen>

  )
}

export default LoginScreen;

const styles = StyleSheet.create({})