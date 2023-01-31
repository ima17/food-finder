import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  Image,
  SafeAreaView,
  ActivityIndicator,
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
    <View>
      <Text>{result.name}</Text>
      <FlatList
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
          return <Image style={style.image} source={{ uri: item }} />;
        }}
      />
    </View>
  );
};

const style = StyleSheet.create({
  image: {
    height: 200,
    width: 300,
  },
  indicator: {
    marginTop: 100,
  },
});

export default ResultShowScreen;
