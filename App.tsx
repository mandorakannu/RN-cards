import React from "react";
import { SafeAreaView, ScrollView } from "react-native";
import FlatCards from "./components/FlatCards";
import ElevatedCard from "./components/ElevatedCard";

export default function App() {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCards />
        <ElevatedCard />
      </ScrollView>
    </SafeAreaView>
  );
}
