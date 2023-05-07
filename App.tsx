import { Dimensions, StyleSheet, Text, View } from "react-native";
import {
  Canvas,
  Fill,
  Image,
  RoundedRect,
  useImage,
} from "@shopify/react-native-skia";

import CardInfo from "./CardInfo";

export default function App() {
  const nubankLogo = useImage(require("./assets/logos/logo_White.png"));
  const { x, y, r, color, image } = CardInfo;

  const { width } = Dimensions.get("window");

  const cardWidth = width - 48;
  const cardHeight = 184;

  return (
    <Canvas style={styles.container}>
      <Fill color="#121212" />

      <RoundedRect
        width={cardWidth}
        height={cardHeight}
        x={x}
        y={y}
        r={r}
        color={color}
      />
      {nubankLogo && (
        <Image
          image={nubankLogo}
          fit="contain"
          x={image.x}
          y={image.y}
          width={image.size}
          height={image.size}
        />
      )}
    </Canvas>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
