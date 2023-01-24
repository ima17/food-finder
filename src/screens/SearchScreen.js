import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import Yelp from "../api/Yelp";
import SearchBar from "../components/SearchBar";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [result, setResult] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const searchApi = async (searchTerm) => {
    try {
      const response = await Yelp.get("/search", {
        params: {
          limit: 50,
          term: searchTerm,
          location: "san jose",
        },
      });
      setResult(response.data.businesses);
    } catch (err) {
      setErrorMessage("Something went wrong!");
    }
  };

  useEffect(() => {
    searchApi("food");
  }, []);

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
