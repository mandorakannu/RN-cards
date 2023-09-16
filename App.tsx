import React from "react";
import { SafeAreaView, ScrollView } from "react-native";
import FlatCards from "./components/FlatCards";

export default function App() {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCards />
      </ScrollView>
    </SafeAreaView>
  );
}
