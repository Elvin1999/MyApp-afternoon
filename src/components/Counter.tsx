import { useState } from "react";
import { Button, Text, View } from "react-native";
import { ThemedText } from "./themed-text";
import StepButton from "./StepButton";

export default function Counter() {
  const [counter, setCounter] = useState<number>(0);

  return (
    <View>
      {/* <Text>Counter : {counter}</Text> */}
      <ThemedText type="title" style={{ color: "red" }}>
        Counter : {counter}
      </ThemedText>

      {/* <Button title="Increase" 
      onPress={() => setCounter(counter + 1)}></Button> */}

      <StepButton
        title="Increase"
        color="deeppink"
        onPress={() => setCounter(counter + 1)}
      ></StepButton>
    </View>
  );
}
