import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { StarIcon } from "react-native-heroicons/solid";
import { HomeIcon } from "react-native-heroicons/outline";

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
    <TouchableOpacity className="mr-2 shadow">
      <Image
        source={{
          uri: imgUrl,
        }}
        className="h-36 w-64 bg-gray-300 p-4"
      />
      <View className="p-4 space-y-1 bg-white">
        <Text className=" text-black font-bold">{title}</Text>
        <View className="flex-row items-center space-x-3">
          <View className="flex-row  items-center space-x-1">
            <StarIcon color={"green"} opacity={0.5} size={22}></StarIcon>
            <Text className=" text-green-500 text-xs">{rating}</Text>
          </View>
          <Text className=" text-gray-500 text-xs">{genre}</Text>
        </View>
        <View className="flex-row items-center space-x-1">
          <HomeIcon color={"gray"} opacity={0.5} size={22}></HomeIcon>
          <Text className="text-gray-400 text-xs">Nearby   {address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantCard;
