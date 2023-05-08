import { Dimensions, StyleSheet } from "react-native";
import {
  BlurMask,
  Canvas,
  Circle,
  Fill,
  Group,
  Image,
  RoundedRect,
  SweepGradient,
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
      >
        <SweepGradient c={{ x: 24, y: 128 }} colors={["#9002d9", "#600090"]} />
        <BlurMask blur={60} style="inner" />
      </RoundedRect>
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

      <Group>
        <Circle
          c={{ x: width - 80, y: bottomLeft.y(cardHeight) - 10 }}
          r={20}
          color="#F10108"
        />
        <Circle
          c={{ x: width - 56, y: bottomLeft.y(cardHeight) - 10 }}
          r={20}
          color="#FF9A01"
        />
      </Group>
    </Canvas>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
