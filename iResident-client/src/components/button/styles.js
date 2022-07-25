import { StyleSheet } from "react-native";
import color from "../../utils/color";
import styleconfig from "../../utils/styleconfig";

const styles = StyleSheet.create({
  container: {
    paddingVertical: styleconfig.smartScale(15),
    justifyContent: "center",
    alignItems: "center",
    borderColor: color.white,
    borderRadius: styleconfig.countPixelRatio(10),
    marginVertical: styleconfig.smartScale(10),
    borderWidth: styleconfig.countPixelRatio(1),
    marginHorizontal: styleconfig.smartWidthScale(20),
  },
  title: {
    fontFamily: styleconfig.fontBold,
    fontSize: styleconfig.countPixelRatio(22),
    color: color.white,
  },
});

export default styles;
