import React from "react";
import { TextInput, View, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

const SearchBar = ({ term, onChangeTerm, onTermSubmit }) => {
  return (
    <View style={style.background}>
      <Feather name="search" style={style.iconStyle} color="black" />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={style.inputStyle}
        placeholder="Search"
        value={term}
        onChangeText={(newTerm) => onChangeTerm(newTerm)}
        onEndEditing={() => onTermSubmit()}
      />
    </View>
  );
};

const style = StyleSheet.create({
  background: {
    marginTop: 15,
    backgroundColor: "rgb(240,238,238)",
    height: 50,
    marginHorizontal: 15,
    borderRadius: 5,
    flexDirection: "row",
    marginBottom: 5,
  },
  inputStyle: {
    flex: 1,
    fontSize: 18,
  },
  iconStyle: {
    alignSelf: "center",
    fontSize: 35,
    marginHorizontal: 10,
  },
});

export default SearchBar;
