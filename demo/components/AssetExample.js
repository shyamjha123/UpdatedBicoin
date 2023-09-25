import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, StyleSheet, Alert, Image } from "react-native";

const AssetExample = () => {
  const [cryptoData, setCryptoData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setCryptoData(data);
        setError(null);
      } catch (error) {
        setError("Error fetching data. Please try again later.");
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Crypto Price Tracker</Text>
      {error && <Text style={styles.errorText}>{error}</Text>}
      <ScrollView>
        <View style={styles.tableHeader}>
          <Text style={styles.headerText}>Name</Text>
          <Text style={styles.headerText}>Symbol</Text>
          <Text style={styles.headerText}>Price</Text>
          <Text style={styles.headerText}>Change (/H)</Text>
        </View>
        {cryptoData.map((item) => (
          <View key={item.id} style={styles.cryptoContainer}>
            <Image style={styles.coinImage} source={{ uri: item.image }} />
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.symbol}>{item.symbol}</Text>
            <Text style={styles.price}>${item.current_price.toFixed(2)}</Text>
            <Text style={styles.percentChange}>
              {item.price_change_percentage_24h.toFixed(2)} %
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 40,
  },
  header: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 20,
    color: "green",
  },
  tableHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "red",
  },
  cryptoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  name: {
    fontSize: 18,
    color: "blue",
  },
  symbol: {
    fontSize: 18,
    color: "red",
  },
  price: {
    fontSize: 18,
    color: "orange",
  },
  percentChange: {
    fontSize: 18,
    color: "green",
  },
  errorText: {
    fontSize: 16,
    color: "red",
    textAlign: "center",
    marginBottom: 10,
  },
  coinImage: {
    width: 30,
    height: 30,
  },
});

export default AssetExample;
