import { StyleSheet } from "react-native";
import color from "../../../utils/color";
import styleconfig from "../../../utils/styleconfig";

const styles = StyleSheet.create({
  sacontainer: {
    flex: 1,
    backgroundColor: color.white,
  },
  ttabtitle: {
    fontFamily: styleconfig.fontMedium,
    fontSize: styleconfig.countPixelRatio(18),
  },
  tabbar: {
    elevation: 0,
    backgroundColor: color.white,
    padding: 0,
    marginHorizontal: styleconfig.smartWidthScale(30),
  },
  tab: {
    width: styleconfig.smartWidthScale(150),
  },
  label: {
    textTransform: "lowercase",
    fontFamily: styleconfig.fontMedium,
    color: "red",
    fontSize: styleconfig.countPixelRatio(16),
  },
  indicator: {
    backgroundColor: color.primary,
  },
});

export default styles;
