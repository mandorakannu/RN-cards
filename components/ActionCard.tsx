import { StyleSheet, Text, View, Linking } from "react-native";
import React from "react";

export default function ActionCard() {
  function openWebsite(websiteLink: string): void {
    Linking.openURL(websiteLink);
  }
  return (
    <View>
      <Text
        style={styles.actionButton}
        onPress={() => openWebsite("https://mandorakannu.tech/")}
      >
        Go To Kannu Mandora Portfolio
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  actionButton: {
    backgroundColor: "#f4511e",
    color: "#fff",
    padding: 10,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    borderRadius: 5,
    margin: 10,
  },
});
