import { StyleSheet } from "react-native";
import styleconfig from "../../utils/styleconfig";

const styles = StyleSheet.create({
  vRightBtnContainer: { flex: 1, borderRadius: styleconfig.countPixelRatio(5) },
  leftAction: {
    flex: 1,
    backgroundColor: "#497AFC",
    justifyContent: "center",
  },
  actionText: {
    color: "white",
    fontSize: 16,
    backgroundColor: "transparent",
    padding: 10,
  },
  vRightContainer: {
    width: styleconfig.smartWidthScale(200),
    flexDirection: "row",
  },
  rightAction: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
  swipeContainer: {
    borderRadius: styleconfig.countPixelRatio(5),
    marginVertical: styleconfig.smartScale(10),
    marginHorizontal: styleconfig.smartWidthScale(15),
  },
});

export default styles;
