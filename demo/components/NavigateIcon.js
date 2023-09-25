import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

const NavigateIcon = ({ navigation }) => {
  const imageUrl =
    "https://e7.pngegg.com/pngimages/145/494/png-clipart-gold-colored-bitcoin-coin-bitcoin-cryptocurrency-monero-initial-coin-offering-bitcoin-medal-gold-thumbnail.png"; // Replace with your image URL

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate("AssetExample")}>
        <Image source={{ uri: imageUrl }} style={styles.image} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "yellow",
  },
  image: {
    width: 300,
    height: 300,
  },
  text: {
    fontSize: 20,
  },
});

export default NavigateIcon;
