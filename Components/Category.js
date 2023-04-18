import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";

const Category = (props) => {
  return (
    <TouchableOpacity className="mr-2">
      <Image
        source={{
          uri: props.imgUrl,
        }}
        className="h-20 w-20 bg-gray-300 p-4"
      />
      <Text className="absolute bottom-1 left-1 text-white font-bold">{props.title}</Text>
    </TouchableOpacity>
  );
};

export default Category;
