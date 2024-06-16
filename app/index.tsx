import { View, Text, SafeAreaView, Image, TextInput, ScrollView } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import React, { useLayoutEffect } from 'react'
import { useNavigation } from 'expo-router';
import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';
import { UserIcon, ChevronDownIcon, MagnifyingGlassIcon, AdjustmentsHorizontalIcon, } from "react-native-heroicons/outline"
const Page = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      // headerTitle:"SAULOX",
      headerShown: false,
    })
  }, [])
  return (

    <SafeAreaView className='bg-white pt-5'>
      <Text></Text>
      <View className="flex-row pb-3 items-center mx-4 space-x-2">

        <Image
          source={{
            uri: "https://links.papareact.com/wru",
          }}
          className="h-7 w-7 bg-gray-300 p-4 rounded-full"
        />

        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs">Deliver Now</Text>
          <Text className="font-bold text-xl">Current Location   <ChevronDownIcon size={20} color="#00CCBB" /></Text>
        </View>
        <UserIcon size={30} color="#00CCBB" />
      </View>

      {/* Search */}

      <View className="flex-row items-center space-x-2 pb-2 mx-4">
        <View className="flex-row flex-1 pace-x-2 bg-gray-200 p-3">
          <MagnifyingGlassIcon size={20} color="#00CCBB" />
          <TextInput placeholder="Pesuisar Restaurantes e Cozinhas"
            keyboardType="default" placeholderTextColor={"#50505050"} />
        </View>
        <AdjustmentsHorizontalIcon size={30} color="#00CCBB" />
      </View>

      {/* BODY */}
      <ScrollView className="bg-gray-100">
        <Categories />

        <FeaturedRow title="Featured" description="{undefined}" id="1"/>
        <FeaturedRow title="Featured"  description="{undefined}" id="2"/>
        <FeaturedRow title="Featured" description="{undefined} " id="3"/>
        <FeaturedRow title="Featured"  description="{undefined} " id="4"/>
     
      </ScrollView>

    </SafeAreaView>
  )
}

export default Page


// <SafeAreaView>
// <View className="flex-1 items-center justify-center text-3xl font-bold underline bg-slate-500">
//   <Text>Open up App js to start working on your app!</Text>
//   <StatusBar style="auto" />
// </View>
// </SafeAreaView>