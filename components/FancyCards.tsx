import { Text, StyleSheet, View, Image } from "react-native";
export default function FancyCards() {
  return (
    <View>
      <Text style={styles.headingText}>Trending Places</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image
          style={styles.cardImage}
          source={{ uri: "https://picsum.photos/200/300" }}
        />
        <View style={styles.cardBody}>
          <Text style={styles.description}>Beach View</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: "bold",
    paddingHorizontal: 20,
  },
  card: {},
  cardElevated: {},
  cardImage: {
    height: 200,
    margin: 10,
    borderRadius: 10,
    width: "auto",
  },
  cardBody: {
    paddingHorizontal: 10,
    alignItems: "center",
  },
    description: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#2196F3",
    },
});
