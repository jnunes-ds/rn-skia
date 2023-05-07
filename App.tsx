import { Canvas, Fill, RoundedRect } from "@shopify/react-native-skia";
import { StatusBar } from "expo-status-bar";
import { Dimensions, StyleSheet, Text, View } from "react-native";

export default function App() {
  const { width } = Dimensions.get("window");

  const cardWidth = width - 48;
  const cardHeight = 184;

  return (
    <Canvas style={styles.container}>
      <Fill color="#121212" />

      <RoundedRect
        width={cardWidth}
        height={cardHeight}
        x={24}
        y={128}
        r={8}
        color="#9002D9"
      ></RoundedRect>
    </Canvas>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
