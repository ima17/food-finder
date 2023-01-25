import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";
import useResult from "../hooks/useResult";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [result, errorMessage, searchApi] = useResult();

  return (
    <View>
      <SearchBar
        term={term}
        onChangeTerm={(newTerm) => setTerm(newTerm)}
        onTermSubmit={() => searchApi(term)}
      />
      <Text> {errorMessage ? errorMessage : null} </Text>
      <Text>We have found {result.length} results</Text>
    </View>
  );
};

const style = StyleSheet.create({});

export default SearchScreen;
