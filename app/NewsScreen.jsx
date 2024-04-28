import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Article from "./components/Article";

export default function NewsScreen() {
  return (
    <View style={styles.newsScreen}>
      <View style={styles.headlineWrapper}>
        <Text style={styles.headlineText}>Novinček</Text>
      </View>

      <View style={styles.newsWrapper}>
        <Article />
        <Article />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  newsScreen: {
    width: "100%",
    height: "100%",
    backgroundColor: "#E8EAED",
    color: "black",
  },

  headlineWrapper: {
    flexDirection: "row",
    paddingTop: 80,
    paddingLeft: 20,
  },

  headlineText: {
    fontSize: 26,
    fontWeight: "bold",
  },

  newsWrapper: {
    marginTop: 20,
    backgroundColor: "#fff",
    height: "100%",
    marginHorizontal: 20,
    borderRadius: 10
  }
});
