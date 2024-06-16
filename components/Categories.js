import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import CategoryCard from './CategoryCard';
const Categories = () => {
    return (
        <ScrollView
            contentContainerStyle={{
                paddingHorizontal: 15,
                paddingTop: 10,
            }}
            horizontal
            showsVerticalScrollIndicator={false}>

            <CategoryCard imgUrl="https://links.papareact.com/gn7"title="testing 1" />
            <CategoryCard imgUrl="https://links.papareact.com/gn7" title="testing 2" />
            <CategoryCard imgUrl="https://links.papareact.com/gn7" title="testing 3" />
            <CategoryCard imgUrl="https://links.papareact.com/gn7" title="testing 10" />
            <CategoryCard imgUrl="https://links.papareact.com/gn7" title="testing 20" />
            <CategoryCard imgUrl="https://links.papareact.com/gn7" title="testing 30" />
            {/* <Text>Categories Hello</Text> */}
        </ScrollView>
    )
}

export default Categories