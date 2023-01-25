import React from "react";
import { Text, Image, StyleSheet, View } from "react-native";

const ResultDetails = ({ result }) => {
  return (
    <View style={style.container}>
      <Image style={style.image} source={{ uri: result.image_url }} />
      <Text style={style.name}>{result.name}</Text>
      <Text>
        {result.rating} Stars, {result.review_count} Reviews
      </Text>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    marginLeft: 15,
  },
  image: {
    height: 120,
    width: 250,
    borderRadius: 4,
    marginBottom: 5,
  },
  name: {
    fontWeight: "bold",
  },
});

export default ResultDetails;
