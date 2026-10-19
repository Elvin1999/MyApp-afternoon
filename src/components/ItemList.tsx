import { useEffect, useState } from "react";
import { FlatList, ScrollView, Text, View } from "react-native";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

const url = "https://fakestoreapi.com/products";

interface Product {
  id: string;
  title: string;
  price: number;
}

const getProducts = async (): Promise<Product[]> => {
  const res = await fetch(url);
  return res.json();
};

export default function ItemList() {
  const [prods, setProds] = useState<Product[]>([]);

  useEffect(() => {
    getProducts().then((data) => setProds(data));
  }, []);

  return (
    <FlatList
      data={prods}
      renderItem={({ item }) => (
        <View
          style={{ margin: 10, paddingTop: 4, backgroundColor: "lightblue" }}
        >
          <Text>
            {item.id} - {item.title}
          </Text>
          <Text>
            Price : {item.price}
            <FontAwesome5 name="money-check-alt" size={36} color="green" />
          </Text>
        </View>
      )}
      keyExtractor={(item) => item.id}
    />
  );
}
