import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  Image,
  SafeAreaView,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import Yelp from "../api/Yelp";

const ResultShowScreen = ({ route }) => {
  const { id } = route.params;
  const [result, setResult] = useState(null);

  const getResult = async (id) => {
    const response = await Yelp.get(`/${id}`);
    setResult(response.data);
  };

  useEffect(() => {
    getResult(id);
  }, []);

  if (!result) {
    return (
      <SafeAreaView>
        <ActivityIndicator size="large" style={style.indicator} />
      </SafeAreaView>
    );
  }

  return (
    <View style={style.container}>
      <Text style={style.textStyle}>{result.name}</Text>
      <FlatList
        data={result.photos}
        scrollIndicatorInsets={false}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
          return (
            <ScrollView contentContainerStyle={style.imageContainer}>
              <Image style={style.image} source={{ uri: item }} />
            </ScrollView>
          );
        }}
      />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    margin: 15,
  },
  imageContainer: {
    marginBottom: 15,
  },
  image: {
    height: 200,
    width: 300,
  },
  indicator: {
    marginTop: 100,
  },
  textStyle: {
    fontSize: 15,
    fontWeight: "bold",
  },
});

export default ResultShowScreen;
