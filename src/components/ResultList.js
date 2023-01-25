import React from "react";
import { Text, StyleSheet, View, FlatList } from "react-native";
import ResultDetails from "./ResultDetails";

const ResultList = ({ title, result }) => {
  return (
    <View style={style.conatiner}>
      <Text style={style.title}>{title}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={result}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => {
          return <ResultDetails result={item} />;
        }}
      />
    </View>
  );
};

const style = StyleSheet.create({
  conatiner: {
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 15,
    marginBottom: 5,
  },
});

export default ResultList;
