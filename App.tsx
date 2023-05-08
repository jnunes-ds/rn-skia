import { Dimensions, StyleSheet } from "react-native";
import {
  Canvas,
  Fill,
  Group,
  Image,
  RoundedRect,
  Text,
  useFont,
  useImage,
} from "@shopify/react-native-skia";

import CardInfo from "./CardInfo";

export default function App() {
  const nubankLogo = useImage(require("./assets/logos/logo_White.png"));
  const font = useFont(require("./assets/fonts/Roboto-Regular.ttf"), 24);

  const { x, y, r, color, topLeft, bottomLeft } = CardInfo;

  const { width, height } = Dimensions.get("window");

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
          x={topLeft.x}
          y={topLeft.y}
          width={topLeft.size}
          height={topLeft.size}
        />
      )}
      {font && (
        <Text
          text="**** 9772"
          x={bottomLeft.x}
          y={bottomLeft.y(cardHeight)}
          font={font}
          color={bottomLeft.color}
        />
      )}

      <Group></Group>
    </Canvas>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
