import React from "react";
import { Text, Image, StyleSheet, View } from "react-native";

const ResultDetails = ({ result }) => {
  return (
    <View>
      <Image style={style.image} source={{ uri: result.image_url }} />
      <Text style={style.name}>{result.name}</Text>
      <Text>
        {result.rating} Stars, {result.review_count} Reviews
      </Text>
    </View>
  );
};

const style = StyleSheet.create({
  image: {
    height: 120,
    width: 250,
    borderRadius: 4,
  },
  name: {
    fontWeight: "bold",
  },
});

export default ResultDetails;
