// let name: string | number = "Elvin";

import { Text, View } from "react-native";

// name = 111;

// type
// interface
// class
// extends
// A

// B : {...} & A

// export default function Hello({ name, age }: { name: string; age: number }) {
//   return (
//     <View>
//       <Text>Hello Zakir</Text>
//       <Text>You are 21 years old</Text>
//     </View>
//   );
// }

type Props = {
  name: string;
  age?: number;
};

export default function Hello({ name, age }: Props) {
  return (
    <View>
      <Text>Hello {name}</Text>
      {age && <Text>You are {age} years old</Text>}
    </View>
  );
}
