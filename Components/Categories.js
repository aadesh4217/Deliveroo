import { View, Text, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import Category from "./Category";
import imageUrlBuilder from '@sanity/image-url';
let builder = imageUrlBuilder({
  projectId: "0k0wzg6a",
  dataset: "production",
});

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    let PROJECT_ID = "0k0wzg6a";
    let DATASET = "production";
    let QUERY = encodeURIComponent(`
    *[_type == "category"]
    `);
    let URL = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${QUERY}`;
    fetch(URL)
      .then((res) => res.json())
      .then(({ result }) => {
        setCategories(result);
      });
  }, []);

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View className="flex-row ml-4">
        {categories?.map((category) => {
          return (
            <Category
              key={category._id}
              imgUrl={builder.image(category.image).url()}
              title={category.name}
            ></Category>
          );
        })}
      </View>
    </ScrollView>
  );
};

export default Categories;
