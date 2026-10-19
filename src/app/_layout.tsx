import Counter from "@/components/Counter";
import Hello from "@/components/Hello";
import ItemList from "@/components/ItemList";
import { Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={{ paddingTop: 20 }}>
      {/* <Text>Hello React Native</Text> */}
      {/* <Hello name="Elvin" age={28} />
      <Hello name="Emrah" /> */}
      {/* <Counter /> */}
      <ItemList />
    </View>
  );
}
