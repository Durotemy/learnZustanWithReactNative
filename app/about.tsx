import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const About = () => {
    return (
        <SafeAreaView>
            <View>
                 <Link href="/">About</Link>
                <Text>About Love here and there</Text>
            </View>
        </SafeAreaView>
    )
}

export default About

const styles = StyleSheet.create({})