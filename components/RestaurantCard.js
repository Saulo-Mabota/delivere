import { Text, Image, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { MapPinIcon, StarIcon } from "react-native-heroicons/solid"

const RestaurantCard = ({
    id,
    imgUrl,
    title,
    rating,
    genre,
    address,
    short_description,
    dishes,
    long,
    lat,
}) => {
    return (
        <TouchableOpacity className='bg-white mr-3 shadow'>
            <Image
                source={{
                    uri: imgUrl,
                }}
                className="h-36 w-64 rounded-sm bg-gray-300"
            />
            <View className='px-3 pb-4'>
                <Text className='font-bold text-lg pt-2'>{title}</Text>
                <View className='flex-row items-center space-x-1'>
                    <StarIcon color="green" opacity={0.5} size={22} />
                    <Text className='text-xs text-gray-500'>
                        <Text className='text-green-500'>{rating}</Text> . {genre}
                    </Text>
                </View>
                <View className='flex-row items-center space-x-1'>
                    <MapPinIcon color="gray" opacity={4.0} size={22}/>
                    <Text className='text-xs text-gray-500'>Proximo . {address}</Text>
                </View>
            </View>

        </TouchableOpacity>
    )
}

export default RestaurantCard

{/* <Image
source={{
  uri: "https://links.papareact.com/wru",
}}
className="h-7 w-7 bg-gray-300 p-4 rounded-full"
/> */}