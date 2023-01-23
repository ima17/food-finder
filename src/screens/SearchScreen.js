import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";

const SearchScreen = () => {
  const [term, setTerm] = useState("");

  return (
    <View>
      <SearchBar
        term={term}
        onChangeTerm={(newTerm) => setTerm(newTerm)}
        onTermSubmit={() => {
          console.log("Submitted");
        }}
      />
      <Text>Search Screen </Text>
      <Text>{term}</Text>
    </View>
  );
};

const style = StyleSheet.create({});

export default SearchScreen;
