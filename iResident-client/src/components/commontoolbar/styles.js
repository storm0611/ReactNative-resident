import { StyleSheet } from "react-native";
import color from "../../utils/color";
import styleconfig from "../../utils/styleconfig";
const styles = StyleSheet.create({
  saContainer: {
    backgroundColor: color.primary,
  },
  blueColor: {
    backgroundColor: color.lightblue,
  },
  vContainer: {
    flexDirection: "row",
    alignItems: "center",
    height: styleconfig.smartScale(55),
    paddingHorizontal: styleconfig.smartWidthScale(5),
    backgroundColor: color.primary,
  },
  iLeftIcon: {
    paddingHorizontal: styleconfig.smartWidthScale(10),
    paddingVertical: styleconfig.smartScale(10),
  },
  iRightIcon: {
    paddingHorizontal: styleconfig.smartWidthScale(10),
    paddingVertical: styleconfig.smartScale(10),
  },
  tTitle: {
    flex: 1,
    marginHorizontal: styleconfig.smartWidthScale(10),
    fontSize: styleconfig.countPixelRatio(22),
    fontFamily: styleconfig.fontBold,
    color: color.whiteorange,
  },
  colorWhite: {
    color: color.white,
  },
});
export default styles;
