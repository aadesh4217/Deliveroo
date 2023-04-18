import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { ChevronLeftIcon } from "react-native-heroicons/outline";

const RestaurantScreen = ({ route, navigation }) => {
  const {
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
  } = route.params;
  useLayoutEffect(() => {
    navigation.setOptions({
      // headerTitle: "HOME ",
      headerShown: false,
    });
  }, []);
  return (
    <ScrollView>
      <View >
        <Image
          source={{
            uri: imgUrl,
          }}
          className="h-56 w-full bg-gray-300 p-4"
        />
        <Text>{title}</Text>
        <TouchableOpacity onPress={navigation.goBack} className="absolute top-14 left-5 p-2 bg-gray-100 rounded-full">
          <ChevronLeftIcon size={20} color={"#00CCBB"}></ChevronLeftIcon>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default RestaurantScreen;

const styles = StyleSheet.create({});
