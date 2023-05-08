export default {
  x: 24,
  y: 128,
  r: 8,
  color: "#9002D9",
  topLeft: {
    x: 40,
    y: 132,
    size: 64,
  },
  bottomLeft: {
    x: 40,
    y: (cardHeight: number) => cardHeight + 120 - 16,
    color: "#FFF",
  },
};
