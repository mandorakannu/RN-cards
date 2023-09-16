import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function FlatCards() {
  return (
    <>
      <Text style={styles.headingText}>Flat Cards</Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.cardOne]}>
          <Text style={{ color: "#fff" }}>Card One</Text>
        </View>
        <View style={[styles.card, styles.cardTwo]}>
          <Text style={{ color: "#fff" }}>Card Two</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
          <Text style={{ color: "#fff" }}>Card Three</Text>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: "bold",
    paddingHorizontal: 20,
  },
  container: {
    flexDirection: "row",
    padding: 8,
  },
  card: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: 100,
    height: 100,
    borderRadius: 5,
    margin: 10,
  },
  cardOne: {
    backgroundColor: "#EF5354",
  },
  cardTwo: {
    backgroundColor: "#50DBB4",
  },
  cardThree: {
    backgroundColor: "blue",
  },
});
