import { View, Text, ScrollView } from "react-native";
import React from "react";
import Category from "./Category";

const Categories = () => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View className="flex-row ml-4">
        <Category
          imgUrl="https://links.papareact.com/gn7"
          title="Pizza"
        ></Category>
        <Category
          imgUrl="https://links.papareact.com/gn7"
          title="Thai"
        ></Category>
        <Category
          imgUrl="https://links.papareact.com/gn7"
          title="Sushi"
        ></Category>
        <Category
          imgUrl="https://links.papareact.com/gn7"
          title="Indian"
        ></Category>
        <Category
          imgUrl="https://links.papareact.com/gn7"
          title="Chinese"
        ></Category>
      </View>
    </ScrollView>
  );
};

export default Categories;
