import { View, Text, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestaurantCard from "./RestaurantCard";
import imageUrlBuilder from '@sanity/image-url';
let builder = imageUrlBuilder({
  projectId: "0k0wzg6a",
  dataset: "production",
});


const FeaturedRow = ({ title, description, id }) => {
  const [restaurants, setRestaurants] = useState([]);
  useEffect(() => {
    let PROJECT_ID = "0k0wzg6a";
    let DATASET = "production";
    let QUERY = encodeURIComponent(
      `
    *[_type == "featured" && _id == "05d2e2ad-7fbd-44dc-bb9d-e40d05e7e401"]{
      ...,
      restaurants[]->{
        ...,
        dishes[]->,
        type-> {
          name
        }
      }
    }[0]
    `
    );
    let URL = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${QUERY}`;
    fetch(URL)
      .then((res) => res.json())
      .then(({ result }) => {
  
        setRestaurants(result.restaurants);
      });
  }, []);
  return (
    <View>
      <View className="flex-row p-4">
        <View className="flex-1">
          <Text className="font-bold text-xl">{title}</Text>
          <Text className="font-bold text-gray-400 text-xs">{description}</Text>
        </View>
        <ArrowRightIcon></ArrowRightIcon>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View className="flex-row ml-4 bg-slate-200">
          {restaurants?.map((restaurant) => {
            return (
              <RestaurantCard
                key={restaurant._id}
                id={restaurant._id}
                imgUrl={builder.image(restaurant.image).url()}
                title={restaurant.name}
                rating={restaurant.rating}
                genre={restaurant.type?.name}
                address={restaurant.address}
                short_description={restaurant.short_description}
                dishes={restaurant.dishes}
                long={restaurant.long}
                lat={restaurant.lat}
              ></RestaurantCard>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
