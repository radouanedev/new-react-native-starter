import 'react-native-gesture-handler'

import { useFonts } from 'expo-font'
import { StatusBar } from 'expo-status-bar'
import React, { useEffect } from 'react'
import { StyleSheet, View } from 'react-native'

import { Text } from '@/ui'

export default function App() {
  const [loaded, error] = useFonts({
    Poppins: require('../assets/fonts/Poppins.ttf'),
    'Poppins-Medium': require('../assets/fonts/Poppins-Medium.ttf'),
    'Poppins-SemiBold': require('../assets/fonts/Poppins-SemiBold.ttf'),
    'Poppins-Bold': require('../assets/fonts/Poppins-Bold.ttf'),
  })

  useEffect(() => {
    if (error) throw error
  }, [error])

  if (!loaded) return null

  return (
    <View style={styles.container}>
      <Text className="font-normal">
        Open up App.tsx to start working on your app!
      </Text>
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

// create function that replace string by
