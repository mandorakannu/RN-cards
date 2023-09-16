import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function ElevatedCard() {
  return (
    <View>
      <Text style={styles.headingText}>ElevatedCard</Text>
      <ScrollView horizontal={true} style={styles.container}>
        <View style={[styles.card, styles.cardElevated]}>
          <Text style={{ color: "white" }}>First</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text style={{ color: "white" }}>Second</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text style={{ color: "white" }}>Third</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text style={{ color: "white" }}>Fourth</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text style={{ color: "white" }}>Fifth</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text style={{ color: "white" }}>Sixth</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text style={{ color: "white" }}>Seventh</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text style={{ color: "white" }}>😊</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: "bold",
    paddingHorizontal: 20,
  },
  container: {
    padding: 8,
  },
  card: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: 100,
    height: 100,
    marginHorizontal: 10,
  },
  cardElevated: {
    backgroundColor: "#2196F3",
  },
});
