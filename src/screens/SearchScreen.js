import React, { useState } from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import ResultList from "../components/ResultList";
import SearchBar from "../components/SearchBar";
import useResult from "../hooks/useResult";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [result, errorMessage, searchApi] = useResult();

  const filterResultByPrice = (price) => {
    return result.filter((result) => {
      return result.price === price;
    });
  };

  return (
    <View style={{ flex: 1 }}>
      <SearchBar
        term={term}
        onChangeTerm={(newTerm) => setTerm(newTerm)}
        onTermSubmit={() => searchApi(term)}
      />
      <Text> {errorMessage ? errorMessage : null} </Text>
      <Text>We have found {result.length} results</Text>
      <ScrollView>
        <ResultList title="Cost Effective" result={filterResultByPrice("$")} />
        <ResultList title="Bit Pricier" result={filterResultByPrice("$$")} />
        <ResultList title="Bit Spender" result={filterResultByPrice("$$$")} />
      </ScrollView>
    </View>
  );
};

const style = StyleSheet.create({});

export default SearchScreen;
