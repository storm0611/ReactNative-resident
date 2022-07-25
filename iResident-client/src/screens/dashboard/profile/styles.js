import { StyleSheet, Platform } from "react-native";
import color from "../../../utils/color";
import styleconfig from "../../../utils/styleconfig";
const styles = StyleSheet.create({
  vContainer: {
    flex: 1,
  },
  profile: {
    alignSelf: "center",
    marginTop: styleconfig.smartScale(40),
    width: styleconfig.countPixelRatio(150),
    height: styleconfig.countPixelRatio(150),
    borderRadius: styleconfig.countPixelRatio(75),
  },
  svContainer: {
    paddingVertical: styleconfig.smartScale(10),
  },
  tName: {
    fontSize: styleconfig.countPixelRatio(24),
    marginTop: styleconfig.smartScale(15),
    alignSelf: "center",
    color: color.lightblack,
    fontFamily: styleconfig.fontNormal,
  },
  vSliderContainer: {
    marginVertical: styleconfig.smartScale(10),
  },
  slider: {
    marginTop: styleconfig.smartScale(15),
    overflow: "visible", // for custom animations
  },
  sliderContentContainer: {
    paddingVertical: styleconfig.smartScale(10), // for custom animation
  },
  tChangeUser: {
    marginTop: styleconfig.smartScale(20),
    color: color.yellow,
    alignSelf: "center",
    fontSize: styleconfig.countPixelRatio(20),
    fontFamily: styleconfig.fontBold,
  },
  tGetInto: {
    fontSize: styleconfig.countPixelRatio(20),
    fontFamily: styleconfig.fontMedium,
    color: color.black,
  },
  pGetInto: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: styleconfig.smartScale(12),
    marginHorizontal: styleconfig.smartWidthScale(60),
    borderRadius: styleconfig.countPixelRatio(40),
    backgroundColor: color.yellow,
  },
});

export default styles;
