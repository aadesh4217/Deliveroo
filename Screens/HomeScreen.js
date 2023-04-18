import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  ScrollView,
} from "react-native";

import React, { useLayoutEffect, useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  ChevronDownIcon,
  UserIcon,
  AdjustmentsVerticalIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/outline";
import Categories from "../Components/Categories";
import FeaturedRow from "../Components/FeaturedRow";

const HomeScreen = () => {
  const [featuredCategories, setFeaturedCategories] = useState([]);

  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      // headerTitle: "HOME ",
      headerShown: false,
    });
  }, []);

  useEffect(() => {
    let PROJECT_ID = "0k0wzg6a";
    let DATASET = "production";
    let QUERY = encodeURIComponent(`
    *[_type == "featured"]{
      ...,restaurants[]->{
        ...,dishes[]->
      }
    }
    `);
    let URL = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${QUERY}`;
    fetch(URL)
      .then((res) => res.json())
      .then(({ result }) => {
        setFeaturedCategories(result);
      });
  }, []);
  return (
    <SafeAreaView className="bg-white pt-5">
      <View>
        <View className="flex-row">
          <View className="flex-row flex-1 pb-3 items-center mx-4 space-x-2">
            <View>
              <Image
                source={{
                  uri: "https://links.papareact.com/wru",
                }}
                className="h-7 w-7 bg-gray-300 p-4 rounded-full"
              />
            </View>
            <View>
              <Text className="font-bold text-gray-400 text-xs">
                Deliver now!...
              </Text>
              <Text className="font-bold text-xl">
                Current Location
                <ChevronDownIcon size={20}></ChevronDownIcon>
              </Text>
            </View>
          </View>
          <View>
            <UserIcon size={35}></UserIcon>
          </View>
        </View>
        <View className="flex-row items-center mx-4 pb-2 space-x-2">
          <View className="flex-row flex-1 items-center bg-gray-200 p-3 space-x-2">
            <MagnifyingGlassIcon></MagnifyingGlassIcon>
            <TextInput placeholder="Restaurant and Cuisines"></TextInput>
          </View>
          <AdjustmentsVerticalIcon></AdjustmentsVerticalIcon>
        </View>
        <ScrollView>
          <Categories></Categories>
          {featuredCategories?.map((category) => {
            return (
              <FeaturedRow
                key={category._id}
                id={category._id}
                title={category.name}
                description={category.short_description}
              ></FeaturedRow>
            );
          })}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
