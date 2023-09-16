import React from "react";
import { SafeAreaView, ScrollView } from "react-native";
import FlatCards from "./components/FlatCards";
import ElevatedCard from "./components/ElevatedCard";
import FancyCards from "./components/FancyCards";
import ActionCard from "./components/ActionCard";

export default function App() {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCards />
        <ElevatedCard />
        <FancyCards />
        <ActionCard />
      </ScrollView>
    </SafeAreaView>
  );
}
