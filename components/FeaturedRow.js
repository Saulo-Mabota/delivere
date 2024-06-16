import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { ArrowRightIcon, ChevronDownIcon, MagnifyingGlassIcon, AdjustmentsHorizontalIcon, } from "react-native-heroicons/outline"
import RestaurantCard from './RestaurantCard';
const FeaturedRow = ({
    title,
    description,
    id,
}) => {
    return (
        <View>
            <View className='mt-4 flex-row items-center justify-between px-4'>
                <Text className='font-bold text-lg'>{title}</Text>
                <ArrowRightIcon size={20} color="#00CCBB" />
            </View>
            <Text className='font-xs text-gray-500 px-4'>{description}</Text>
            <ScrollView
                horizontal
                contentContainerStyle={{

                    paddingHorizontal: 15,
                }}
                showsVerticalScrollIndicator={false}

                className='pt-4'>
                    {/* Restaurente CARDS */}
                <RestaurantCard 
                 id = {1}
                 imgUrl="https://links.papareact.com/wru"
                 title ="Nandos"
                 rating={4.5}
                 genre="Japanese"
                 address="3105 Ilha de Moçambique"
                 short_description="This is test"
                 dishes={[]}
                 long={20}
                 lat={30}
                />
   <RestaurantCard 
                 id = {1}
                 imgUrl="https://links.papareact.com/wru"
                 title ="Nandos"
                 rating={4.5}
                 genre="Japanese"
                 address="3105 Ilha de Moçambique"
                 short_description="This is test"
                 dishes={[]}
                 long={20}
                 lat={30}
                />
                   <RestaurantCard 
                 id = {1}
                 imgUrl="https://links.papareact.com/wru"
                 title ="Nandos"
                 rating={4.5}
                 genre="Japanese"
                 address="3105 Ilha de Moçambique"
                 short_description="This is test"
                 dishes={[]}
                 long={20}
                 lat={30}
                />
                   <RestaurantCard 
                 id = {1}
                 imgUrl="https://links.papareact.com/wru"
                 title ="Nandos"
                 rating={4.5}
                 genre="Japanese"
                 address="3105 Ilha de Moçambique"
                 short_description="This is test"
                 dishes={[]}
                 long={20}
                 lat={30}
                />
                
            </ScrollView>
        </View>
    )
}

export default FeaturedRow